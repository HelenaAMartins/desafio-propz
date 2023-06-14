import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  background: rgb(220, 153, 57);
  background: linear-gradient(
    99deg,
    rgba(220, 153, 57, 1) 0%,
    rgba(207, 103, 55, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: 500;
  text-transform: uppercase;

  @media ${device.tabletL} {
    font-size: 6rem;
    padding-left: 30px;
    font-weight: 700;
  }
`;
