import React from "react";
import C from "classnames";
import T from "prop-types";

interface FormProps {
  onSubmit?: () => void;
  children: React.ReactNode;
}

const Form = ({ onSubmit, children }: FormProps) => {
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
  onSubmit: null,
  children: null
};

export default Form;
