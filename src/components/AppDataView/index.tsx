import { ProductsService } from "@/service/ProductsService";
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
import { addItemToCart } from "../../store/utilStore";

interface AppDataViewType {
  Show?: number;
}

const AppDataView: React.FC<AppDataViewType> = (props: AppDataViewType) => {
  const [products, setProducts] = useState<Product[]>();

  const dispatch = useDispatch();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const result = await ProductsService.GetProducts();
    setProducts(result.products);
  };
  //=======
  return (
    <>
      <Container>
        <ContainerGrid>
          {products?.map((product, index) => (
            <ContainerCard key={product + String(index)}>
              <ImageCard>
                <img src={product.photo} width={120} height={120} alt="" />
              </ImageCard>
              <HeaderCard>
                <h1>{product.name}</h1>
                <span>R${String(product.price)?.substring(0, 4)}</span>
              </HeaderCard>
              <FooterCard>
                <p>{product.description}</p>
              </FooterCard>
              <ButtunAdd onClick={() => dispatch(addItemToCart(product))}>
                <div>
                  <Bag size={17} color="#fafafa" weight="bold" />
                  <span>Comprar</span>
                </div>
              </ButtunAdd>
            </ContainerCard>
          ))}
        </ContainerGrid>
      </Container>
    </>
  );
};

export default AppDataView;
