import styled from "styled-components";
import { SCREEN_SIZE_SMALL } from "../../defaultTokens";

export const ShoppingCartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    right: 20px;
    height: unset;
    box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 20px;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    height: 60%;
    max-height: 320px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CheckoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
