import { RootState } from "@/store";
import { Minus, Plus, XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonEndShop, FooterNav, GridCardCar, StyledMenu } from "./styles";
import {
  addItemToCart,
  dialogCartShowOrHide,
  removeProductsToCar,
} from "../../store/utilStore";
import { Product } from "@/types/GlobalTypes";
import { ButtonRemove, CardProduct, CardSelect } from "./style_cart";
import theme from "@/styles/theme";

export const NavMenu = () => {
  const [productsQtd, setProductsQtd] = useState(1);
  const [productsRender, setProductsRender] = useState<Product[]>([]);
  const [removeToCart, setRemoveToCart] = useState<Boolean>(false);

  //=============================
  const dispatch = useDispatch();
  const ShowMenu = useSelector((state: RootState) => state.util.dialogCart);
  const products = useSelector((state: RootState) => state.util.products);
  const StateDialog = useSelector((state: RootState) => state.util.dialogCart);

  //=============================

  useEffect(() => {
    setProductsRender(products.items);
    setRemoveToCart(false);
  }, [StateDialog, productsQtd, dispatch, removeToCart]);

  //=============================
  const handleNewProduct = (product: Product) => {
    let obj = {
      id: product.id,
      price: product.price,
      quantity: productsQtd,
      totalPrice: productsQtd * product.price,
      name: product.name,
      photo: product.photo,
    };

    return obj;
  };

  //=============================

  const handleClickAddQtd = (product: Product) => {
    setProductsQtd(productsQtd + 1);
    dispatch(addItemToCart(handleNewProduct(product)));
  };

  const handleClickRemoveQtd = (product: Product) => {
    setProductsQtd(productsQtd > 0 ? productsQtd - 1 : productsQtd);
    dispatch(addItemToCart(handleNewProduct(product)));
  };

  //=============================

  const RenderRemoveProduct = (product: Product) => {
    setRemoveToCart(true);
    dispatch(removeProductsToCar(product));
  };

  //=============================
  return (
    <>
      {ShowMenu ? (
        <StyledMenu>
          <div>
            <h1>Carrinho de Compra</h1>
            <button onClick={() => dispatch(dialogCartShowOrHide(false))}>
              <XCircle size={32} color="#fafafa" weight="bold" />
            </button>
          </div>
          <GridCardCar>
            {productsRender.map((product: Product, index: number) => (
              <CardProduct key={product + String(index)}>
                <img width={50} height={50} src={product.photo} alt="" />

                <h2>{product.name}</h2>

                <div className="flex-col">
                  <p>Qtd:</p>

                  <CardSelect>
                    <button
                      className="button-r"
                      onClick={() => handleClickAddQtd(product)}
                    >
                      <Plus
                        size={8}
                        color={theme.colors.textSecundary}
                        weight="duotone"
                      />
                    </button>
                    <h4>{product?.quantity}</h4>
                    <button
                      className="button-l"
                      onClick={() => handleClickRemoveQtd(product)}
                    >
                      <Minus
                        size={8}
                        color={theme.colors.textSecundary}
                        weight="duotone"
                      />
                    </button>
                  </CardSelect>
                </div>

                <h3>
                  R$
                  {Number(product?.price) * product?.quantity}
                </h3>

                <ButtonRemove
                  onClick={() => RenderRemoveProduct(product)}
                  className="Close-Card"
                >
                  <XCircle
                    size={15}
                    color={theme.colors.textPimary}
                    weight="bold"
                  />
                </ButtonRemove>
              </CardProduct>
            ))}
          </GridCardCar>
          <FooterNav>
            <h1>Total</h1>
            <h2>R$ {products.totalPrice}</h2>
          </FooterNav>
          <ButtonEndShop>Finalizar Compra</ButtonEndShop>
        </StyledMenu>
      ) : null}
    </>
  );
};
