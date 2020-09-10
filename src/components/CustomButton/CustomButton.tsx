import React, { ReactNode } from "react";
import "./CustomButton.styles.scss";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<Props> = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}
      ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
