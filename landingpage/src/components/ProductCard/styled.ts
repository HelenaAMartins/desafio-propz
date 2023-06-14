import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const ProductWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 0 50px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductName = styled.h4``;

export const ProductBrand = styled.span``;

export const ProductQuantity = styled.span``;

export const GridPrice = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;

  @media ${device.tabletL} {
    font-size: 2rem;
  }

  span {
    font-size: 0.8rem;
  }
`;

export const Figure = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    max-width: 100%;
  }
`;

export const PriceSubtitle = styled.span`
  font-size: 0.8rem;
`;
