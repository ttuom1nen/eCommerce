import styled from "styled-components";

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
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 20px;
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