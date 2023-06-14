import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StoreWrapper = styled.div`
  margin: 80px 0;
  border: 2px solid #da8e33;
  padding: 30px 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const StoreTitle = styled.span`
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  font-weight: 500;
  color: #5c5c5c;
  border-bottom: 1px solid #5c5c5c;
  border-width: 100%;
  padding-bottom: 20px;
`;

export const StoreGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 15px;

  @media ${device.tabletL} {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const StoreItems = styled.a`
  padding-top: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #5c5c5c;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: #da8e33;
  }
`;
