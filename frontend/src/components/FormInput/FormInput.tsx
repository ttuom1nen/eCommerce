import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./FormInput.styles";

interface Props {
  name: string;
  type: string;
  value: string;
  label: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  required: boolean;
}

const FormInput: React.FC<Props> = ({ handleChange, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={props.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
