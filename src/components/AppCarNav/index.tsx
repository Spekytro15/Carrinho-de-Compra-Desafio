import { RootState } from "@/store/store";
import { XCircle } from "phosphor-react";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonEndShop, FooterNav, GridCardCar, StyledMenu } from "./styles";
import { dialogCartShowOrHide } from "../../store/utilStore";
import { AppCarNavCard } from "../AppCarNavCard";
import { Product } from "@/types/GlobalTypes";

export const NavMenu = () => {
  const [totalPrice, setTotalPrice] = useState<number>();
  const [EventClick, setEventClick] = useState<number>(0);
  const dispatch = useDispatch();
  const ShowMenu = useSelector((state: RootState) => state.util.dialogCart);
  const products = useSelector((state: RootState) => state.util.products);
  const StateDialog = useSelector((state: RootState) => state.util.dialogCart);

  useEffect(() => {
    let sum = 0;
    products.items.map((t) => {
      sum = sum + Number(t.price);
    });
    setTotalPrice(sum);
  }, [StateDialog]);

  const handleClickAdd = (e: any) => {
    let sum = e;
    setTotalPrice(sum + e);
    console.log("CLICK : " + EventClick + " > SOMA : ", sum);
  };

  const handleClickRemove = (e: any) => {
    let sum = 0;
    setTotalPrice(sum + e);
    console.log("CLICK : " + EventClick + " > SOMA : ", sum);
  };
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
            {products.items.map((product: Product, index: number) => (
              <AppCarNavCard
                key={354 + index}
                index={product.index}
                id={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                totalPrice={product.totalPrice}
                photo={product.photo}
                ClickAddQuant={async (e) => handleClickAdd(e)}
                ClickRemoveQuant={async (e) => handleClickRemove(e)}
              />
            ))}
          </GridCardCar>
          <FooterNav>
            <h1>Total</h1>
            <h2>R$ {totalPrice}</h2>
          </FooterNav>
          <ButtonEndShop>Finalizar Compra</ButtonEndShop>
        </StyledMenu>
      ) : null}
    </>
  );
};
