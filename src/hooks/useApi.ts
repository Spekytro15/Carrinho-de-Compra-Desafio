import axios from "axios";
import { useEffect } from "react";
import store from "@/store/index";

import { Loading } from "@/store/utilStore";

const useApi = () => {
  const getApi = async (url: string) => {
    store.dispatch(Loading(true));

    const result = await fetch(url);

    store.dispatch(Loading(false));

    return result;
  };

  return { getApi };
};

export default useApi;
