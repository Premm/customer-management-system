import React from "react";
import C from "classnames";
import T from "prop-types";

const TableRow = ({ children }) => {
  return <tr className={C("mb-tablerow")}>{children}</tr>;
};

TableRow.propTypes = {
  children: T.node
};

TableRow.propTypes = {
  children: null
};

export default TableRow;
