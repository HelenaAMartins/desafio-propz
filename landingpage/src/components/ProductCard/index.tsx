import * as Styled from "./styled";

type Price = {
  [key: string]: string;
};

type Props = {
  img: string;
  nome: string;
  marca: string;
  quantidade: string;
  price: Price;
  link: string;
};

const ProductCard = ({ info }: { info: Props }) => {
  return (
    <Styled.ProductWrapper>
      <a href={info.link} target="_blank">
        <img src={`/${info?.img}`} />
      </a>
      <Styled.InfoWrapper>
        <Styled.HeaderInfo>
          <a href={info.link} target="_blank">
            <Styled.Title>
              <Styled.ProductName>{info?.nome}</Styled.ProductName>
              <Styled.ProductBrand>{info?.marca}</Styled.ProductBrand>
            </Styled.Title>
          </a>
          <Styled.ProductQuantity>{info?.quantidade}</Styled.ProductQuantity>
        </Styled.HeaderInfo>

        <Styled.GridPrice>
          <Styled.PriceWrapper>
            <Styled.Price>
              10X <span>R$</span>
              {info?.price?.["10x"]}
            </Styled.Price>
            <Styled.PriceSubtitle>Sem juros</Styled.PriceSubtitle>
          </Styled.PriceWrapper>
          <Styled.Figure>
            <img src="credit-cards.png" />
          </Styled.Figure>
          <Styled.PriceWrapper>
            <Styled.Price>
              15X <span>R$</span>
              {info?.price?.["15x"]}
            </Styled.Price>
            <Styled.PriceSubtitle>Com juros</Styled.PriceSubtitle>
          </Styled.PriceWrapper>
          <Styled.PriceSubtitle>ou R$499,90 à vista</Styled.PriceSubtitle>
        </Styled.GridPrice>
      </Styled.InfoWrapper>
    </Styled.ProductWrapper>
  );
};

export default ProductCard;
