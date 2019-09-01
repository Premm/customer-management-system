import React from "react";
import C from "classnames";
import T from "prop-types";

const typeMapper = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  dark: "btn-dark",
  light: "btn-light"
};

const sizeMapper = {
  small: "btn-sm",
  large: "btn-lg"
};

const Button = ({ text, size, type, onClick }) => {
  return (
    <button
      className={C(
        "mb-btn",
        type ? typeMapper[type] : "btn-primary",
        size && sizeMapper[size]
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: T.string,
  size: T.string,
  type: T.string,
  onClick: T.func
};

Button.defaultProps = {
  text: null,
  size: null,
  type: "primary",
  onClick: console.log("no onClick function is assigned.")
};

export default Button;
