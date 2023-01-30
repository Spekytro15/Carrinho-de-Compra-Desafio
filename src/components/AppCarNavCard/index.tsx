import { RootState } from "@/store/store";
import { Minus, Plus, ShoppingCart, XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "./style";
import { addItemToCart, removeProductsToCar } from "../../store/utilStore";
import { ButtonRemove, CardProduct, CardSelect } from "./style";
import theme from "@/styles/theme";
import { Product } from "@/types/GlobalTypes";

interface AppCardNav extends Product {
  ClickAddQuant: (e: any) => {};
  ClickRemoveQuant: (e: any) => {};
}

export const AppCarNavCard = (props: AppCardNav) => {
  const [productsQtd, setProductsQtd] = useState(1);

  const dispatch = useDispatch();

  const handleNewProduct = (index: number | undefined, product: Product) => {
    return {
      id: product.id,
      index: index,
      price: product.price,
      quantity: productsQtd,
      totalPrice: productsQtd * product.price,
      name: product.name,
      photo: product.photo,
    };
  };

  return (
    <>
      <CardProduct>
        <img width={50} height={50} src={props.photo} alt="" />

        <h2>{props.name}</h2>

        <div className="flex-col">
          <p>Qtd:</p>

          <CardSelect>
            <button
              className="button-r"
              onClick={() => {
                props.ClickAddQuant(props?.price * productsQtd);
                setProductsQtd(productsQtd + 1),
                  dispatch(addItemToCart(handleNewProduct(props.index, props)));
              }}
            >
              <Plus
                size={8}
                color={theme.colors.textSecundary}
                weight="duotone"
              />
            </button>
            <h4>{productsQtd}</h4>
            <button
              className="button-l"
              onClick={() => {
                props.ClickRemoveQuant(props?.price * productsQtd),
                  setProductsQtd(productsQtd > 0 ? productsQtd - 1 : 0),
                  dispatch(addItemToCart(handleNewProduct(props.index, props)));
              }}
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
          {props?.price * productsQtd}
        </h3>

        <ButtonRemove
          onClick={() => dispatch(removeProductsToCar(props.index))}
          className="Close-Card"
        >
          <XCircle size={15} color={theme.colors.textPimary} weight="bold" />
        </ButtonRemove>
      </CardProduct>
    </>
  );
};
