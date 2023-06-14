import * as Styled from "./styled";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return <Styled.Header>{children}</Styled.Header>;
};

export default Header;
