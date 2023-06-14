import * as Styled from "./styled";

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => (
  <Styled.Wrapper>
    <Styled.Title>{title}</Styled.Title>
  </Styled.Wrapper>
);

export default Title;
