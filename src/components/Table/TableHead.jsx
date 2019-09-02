import React from "react";
import C from "classnames";
import T from "prop-types";

const TableHead = ({ children }) => {
  return <th className={C("mb-tablehead")}>{children}</th>;
};

TableHead.propTypes = {
  children: T.node
};

TableHead.defaultProps = {
  children: null
};

export default TableHead;
