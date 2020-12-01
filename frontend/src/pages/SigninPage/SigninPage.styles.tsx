import styled from "styled-components";
import { SCREEN_SIZE_SMALL } from "../../defaultTokens";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
    width: 100%;
    display: initial;
    margin: 0;
  }
`;
