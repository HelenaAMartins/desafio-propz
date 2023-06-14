import * as Styled from "./styled";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => (
  <Styled.Container>{children}</Styled.Container>
);

export default Container;
