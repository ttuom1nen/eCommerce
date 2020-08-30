import React, { ReactNode, SyntheticEvent } from "react";
import "./CustomButton.styles.scss";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
