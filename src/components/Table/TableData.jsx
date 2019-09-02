import React from "react";
import C from "classnames";
import T from "prop-types";

const TableData = ({ children }) => {
  return <td className={C("mb-tabledata")}>{children}</td>;
};

TableData.propTypes = {
  children: T.node
};

TableData.propTypes = {
  children: null
};

export default TableData;
