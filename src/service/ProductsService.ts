export class ProductsServices {}

const url_base = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/";

export const GetProducts = async (): Promise<any> => {
  const result = await fetch(
    url_base + `products?page=1&rows=10&sortBy=name&orderBy=ASC`,
    {
      method: "GET",
    }
  );

  return await result.json();
};

export const ProductsService = { GetProducts };
