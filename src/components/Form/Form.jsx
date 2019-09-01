import React from "react";
import C from "classnames";
import T from "prop-types";

const Form = ({ onSubmit, children }) => {
  return (
    <form className={C("mb-form")} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: T.func,
  children: T.node
};

Form.defaultProps = {
  onSubmit: console.log("no onSubmit function is assigned."),
  children: null
};

export default Form;
