import { ProductsTypes } from "@/types/GlobalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    dialogCart: false, //TODO ABRIR CARRINHO
    Loading: false, //TODO Loading
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
        //TODO ADICIONANDO SE NÂO EXISTIR
        state.products.items.push({
          id: newItem.id,
          price: newItem.price,
          index: newItem.index,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          name: newItem.name,
          photo: newItem.photo,
        });
      } else {
        //TODO SOMA INDIVIDUAL SUBISTITUINDO COM NOVO VALOR
        state.products.items.find((item, index) => {
          if (item.id === newItem.id) {
            state.products.items[index] = newItem;
          }
        });
      }
      //TODO SOMA TOTAL ITEMS
      let sum = 0;
      state.products.items.map((product) => {
        sum = sum + product.totalPrice;
      });
      state.products.totalPrice = sum;
    },

    //==================================

    removeProductsToCar(state, action: PayloadAction<any>) {
      const newItem = action.payload;
      //TODO VERIFICA O ID DO OBJETO E DELETA ELE
      state.products.items.find((item, index) => {
        if (item.id === newItem.id) {
          state.products.items.splice(index, 1);
          state.products.totalPrice =
            state.products.totalPrice - item.totalPrice;
        }
      });
    },

    //==================================

    Loading(state, action: PayloadAction<boolean>) {
      state.Loading = action.payload;
    },
  },
});

// Exportar as Funçoes
export const {
  dialogCartShowOrHide,
  addItemToCart,
  removeProductsToCar,
  Loading,
} = util.actions;

export default util.reducer;
