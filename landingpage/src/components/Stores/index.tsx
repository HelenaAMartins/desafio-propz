import * as Styled from "./styled";
import Lojas from "./lojas.json";

const Stores = () => {
  return (
    <Styled.StoreWrapper>
      <Styled.StoreTitle>Lojas Propz</Styled.StoreTitle>
      <Styled.StoreGrid>
        {Lojas.map((item) => (
          <Styled.StoreItems href="#">{item}</Styled.StoreItems>
        ))}
      </Styled.StoreGrid>
    </Styled.StoreWrapper>
  );
};

export default Stores;
