import React from "react";
import C from "classnames";
import T from "prop-types";

const typeMapper = {
  primary: "primary",
  secondary: "secondary",
  dark: "dark",
  light: "light"
};

const sizeMapper = {
  small: "sm",
  large: "lg"
};

const Input = ({ placeholder, size, type, onChange }) => {
  return (
    <input
      className={C(
        type ? typeMapper[type] : "primary",
        size && sizeMapper[size]
      )}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  placeholder: T.string,
  size: T.string,
  type: T.string,
  onChange: T.func
};

Input.defaultProps = {
  placeholder: null,
  size: null,
  type: "primary",
  onChange: null
};

export default Input;
