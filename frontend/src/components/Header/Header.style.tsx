import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";
import { SCREEN_SIZE_SMALL } from "../../defaultTokens";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)<LinkProps>`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    padding: 0px 10px;
  }
`;
