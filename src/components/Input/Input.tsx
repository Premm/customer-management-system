import React from "react";
import C from "classnames";
import T from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  &.mb-input {
    font-size: 20px;
    flex: 1;
  }
`;
const typeMapper: {
  [index: string]: string;
  primary: string;
  secondary: string;
  dark: string;
  light: string;
} = {
  primary: "input-primary",
  secondary: "input-secondary",
  dark: "input-dark",
  light: "input-light"
};

const sizeMapper: {
  [index: string]: string;
  small: string;
  large: string;
} = {
  small: "input-sm",
  large: "input-lg"
};

interface InputProps {
  placeholder?: string;
  size?: string;
  type?: string;
  onChange?: () => void;
  name: string;
  inputType: string;
  value: string;
}

const Input = ({
  placeholder,
  size,
  type,
  onChange,
  name,
  inputType,
  value
}: InputProps) => {
  return (
    <StyledInput
      className={C(
        "mb-input",
        type ? typeMapper[type] : "input-primary",
        size && sizeMapper[size]
      )}
      type={inputType ? inputType : "text"}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};

Input.propTypes = {
  placeholder: T.string,
  value: T.string,
  name: T.string,
  size: T.string,
  type: T.string,
  inputType: T.string,
  onChange: T.func
};

Input.defaultProps = {
  placeholder: null,
  name: "",
  value: "",
  size: null,
  type: "primary",
  inputType: "text",
  onChange: function() {}
};

export default Input;
