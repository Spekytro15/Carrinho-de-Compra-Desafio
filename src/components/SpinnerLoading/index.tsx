import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "./styles";

interface AppHeaderType {}

const SpinnerLoading: React.FC<AppHeaderType> = (props: AppHeaderType) => {
  const Loading = useSelector((state: RootState) => state.util.Loading);

  //=============================
  useEffect(() => {
    console.log(Loading);
  }, []);

  return (
    <>
      {Loading ? (
        <>
          <Spinner />
        </>
      ) : null}
    </>
  );
};

export default SpinnerLoading;
