import { ProductsTypes } from "@/types/GlobalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

//==================================

const products: ProductsTypes = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

//==================================

const util = createSlice({
  name: "util",
  initialState: {
    products,
    priceProducts: 0,
    dialogCart: false, // True: SHOW FALSE: HIDE
  },

  reducers: {
    dialogCartShowOrHide(state, action: PayloadAction<boolean>) {
      state.dialogCart = action.payload;
    },

    //==================================

    addItemToCart(state, action: PayloadAction<any>) {
      const newItem = action.payload;
      const existingItem = state.products.items.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.products.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          name: newItem.name,
          photo: newItem.photo,
        });
      } else {
        const existingItemPrice = state.products.items.find(
          (item) => item.totalPrice === newItem.totalPrice
        );
        if (!existingItemPrice) {
          state.products.items.slice(0, action.payload);
        }
      }
    },

    //==================================

    removeProductsToCar(state, action: PayloadAction<any>) {
      const arr = state.products.items.splice(action.payload, 1);
    },

    //==================================

    totalQuanti(state, action: PayloadAction<number>) {
      state.priceProducts = action.payload;
    },
  },
});

// Exportar as Funçoes
export const { dialogCartShowOrHide, addItemToCart, removeProductsToCar } =
  util.actions;

export default util.reducer;
