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

const Button = ({ text, size, type, onClick }) => {
  return (
    <button
      className={C(
        type ? typeMapper[type] : "primary",
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
  onClick: function() {
    console.log("no onClick function is assigned.");
  }
};

export default Button;
