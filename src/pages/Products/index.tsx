import { Product, ProductsTypes } from "@/types/GlobalTypes";
import { Bag, ShoppingCart } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ButtunAdd,
  Container,
  ContainerCard,
  ContainerGrid,
  FooterCard,
  HeaderCard,
  ImageCard,
} from "./styles";
import { addItemToCart, Loading } from "../../store/utilStore";
import SkeletonLoading from "@/components/SpinnerLoading";
import { ProductsService } from "@/service/ProductsService";

interface AppDataViewType {
  Show?: number;
}

const AppDataView: React.FC<AppDataViewType> = (props: AppDataViewType) => {
  const [products, setProducts] = useState<Product[]>();

  //=============================

  const dispatch = useDispatch();

  //=============================

  useEffect(() => {
    handleData();
  }, []);

  //=============================

  const handleData = async () => {
    const result = await ProductsService.List();
    setProducts(result.products);
  };

  //=============================

  const handlAddCartNewProduct = (index: number, product: Product) => {
    return {
      id: product.id,
      index: index,
      price: product.price,
      quantity: 1,
      totalPrice: 1 * product.price,
      name: product.name,
      photo: product.photo,
    };
  };

  //=============================
  return (
    <>
      <Container>
        <ContainerGrid>
          {products?.map((product, index) => (
            <>
              <SkeletonLoading />
              <ContainerCard key={product + String(index)}>
                <ImageCard className="skeleton">
                  <img src={product.photo} width={120} height={120} alt="" />
                </ImageCard>
                <HeaderCard>
                  <h1 className="skeleton">{product.name}</h1>
                  <span className="skeleton">
                    R${String(product.price)?.substring(0, 4)}
                  </span>
                </HeaderCard>
                <FooterCard>
                  <p className="skeleton">{product.description}</p>
                </FooterCard>
                <ButtunAdd
                  onClick={() =>
                    dispatch(
                      addItemToCart(handlAddCartNewProduct(index, product))
                    )
                  }
                >
                  <div>
                    <Bag size={17} color="#fafafa" weight="bold" />
                    <span>Comprar</span>
                  </div>
                </ButtunAdd>
              </ContainerCard>
            </>
          ))}
        </ContainerGrid>
      </Container>
    </>
  );
};

export default AppDataView;
