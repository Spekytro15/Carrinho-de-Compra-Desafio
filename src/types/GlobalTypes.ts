export type ProductsTypes = {
  items: Product[];
  totalQuantity: number;
  totalPrice: number;
};

export type Product = {
  id?: number;
  index?: number;
  price: number;
  name?: string;
  photo?: string;
  quantity: number;
  totalPrice: number;
  description?: string;
};
