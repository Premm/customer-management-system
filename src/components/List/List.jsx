import React from "react";
import C from "classnames";
import T from "prop-types";

const List = ({ children }) => {
  return <ul className={C("mb-list")}>{children}</ul>;
};

List.propTypes = {
  children: T.node
};

List.defaultProps = {
  children: null
};

export default List;
