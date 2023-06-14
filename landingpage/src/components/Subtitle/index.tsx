import * as Styled from "./styled";

type Props = {
  text: string;
};

const Subtitle = ({ text }: Props) => (
  <Styled.Section>
    <Styled.Wrapper>
      <Styled.Title>{text}</Styled.Title>
    </Styled.Wrapper>
  </Styled.Section>
);

export default Subtitle;
