import React from "react";
import C from "classnames";
import T from "prop-types";

const Table = ({ children }) => {
  return <table className={C("mb-table")}>{children}</table>;
};

Table.propTypes = {
  children: T.node
};

Table.defaultProps = {
  children: null
};

export default Table;
