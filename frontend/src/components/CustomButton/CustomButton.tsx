import React, { ReactNode } from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

export interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<Props> = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
