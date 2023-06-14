import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;

    @media ${device.tabletL} {
      width: 220px;
    }
  }
`;
