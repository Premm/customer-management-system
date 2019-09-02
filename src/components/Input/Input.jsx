import React from "react";
import C from "classnames";
import T from "prop-types";

const typeMapper = {
  primary: "input-primary",
  secondary: "input-secondary",
  dark: "input-dark",
  light: "input-light"
};

const sizeMapper = {
  small: "input-sm",
  large: "input-lg"
};

const Input = ({
  placeholder,
  size,
  type,
  onChange,
  name,
  inputType,
  value
}) => {
  return (
    <input
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
  onChange: null
};

export default Input;
