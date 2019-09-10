import React from "react";
import C from "classnames";
import T from "prop-types";

const ListItem = ({ children }) => {
  return <li className={C("mb-list-item")}>{children}</li>;
};

ListItem.propTypes = {
  children: T.node
};

ListItem.defaultProps = {
  children: null
};

export default ListItem;
