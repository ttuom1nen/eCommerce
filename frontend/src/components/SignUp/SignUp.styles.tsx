import styled from "styled-components";
import { SCREEN_SIZE_SMALL } from "../../defaultTokens";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
