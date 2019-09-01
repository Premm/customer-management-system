import React from "react";
import C from "classnames";
import T from "prop-types";
import { Link } from "react-router-dom";

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

const Button = ({ children, size, type, onClick, to }) => {
  return to ? (
    <Link
      className={C(
        "mb-btn",
        type ? typeMapper[type] : "btn-primary",
        size && sizeMapper[size]
      )}
      to={to}
    >
      {" "}
      {children}{" "}
    </Link>
  ) : (
    <button
      className={C(
        "mb-btn",
        type ? typeMapper[type] : "btn-primary",
        size && sizeMapper[size]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: T.string,
  size: T.string,
  type: T.string,
  onClick: T.func
};

Button.defaultProps = {
  children: null,
  size: null,
  type: "primary",
  onClick: console.log("no onClick function is assigned.")
};

export default Button;
