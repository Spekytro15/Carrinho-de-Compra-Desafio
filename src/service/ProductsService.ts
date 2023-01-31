import useApi from "../hooks/useApi";

let url_api = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/";
export const List = async (): Promise<any> => {
  const { getApi } = useApi();
  const result = await getApi(
    `${url_api}products?page=1&rows=10&sortBy=name&orderBy=ASC`
  );

  return await result.json();
};

export const ProductsService = { List };
