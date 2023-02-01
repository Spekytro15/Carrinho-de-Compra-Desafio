import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "./styles";

const SpinnerLoading: React.FC = () => {
  const Loading = useSelector((state: RootState) => state.util.Loading);

  return (
    <>
      {Loading && (
        <>
          <Spinner />
        </>
      )}
    </>
  );
};

export default SpinnerLoading;
