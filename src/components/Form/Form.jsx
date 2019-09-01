import React from "react";
import C from "classnames";
import T from "prop-types";

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

Form.propTypes = {
  onSubmit: T.func,
  children: T.node
};

Form.defaultProps = {
  onSubmit: null,
  children: null
};

export default Form;
