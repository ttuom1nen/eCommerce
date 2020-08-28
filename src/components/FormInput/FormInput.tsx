import React from "react";
import "./FormInput.styles.scss";

interface Props {
  name: string;
  type: string;
  value: string;
  label: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  required: boolean;
}

const FormInput = ({ handleChange, label, ...otherProps }: Props) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
