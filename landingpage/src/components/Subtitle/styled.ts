import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  padding: 40px 0 60px;
  max-width: 600px;

  @media ${device.tabletL} {
    padding-top: 60px;
  }
`;

export const Title = styled.h1`
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;

  @media ${device.tabletL} {
    font-size: 1.2rem;
  }
`;
