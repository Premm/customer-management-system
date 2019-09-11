import React from "react";
import C from "classnames";
import T from "prop-types";

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
  return <li className={C("mb-list-item")}>{children}</li>;
};

ListItem.propTypes = {
  children: T.node
};

ListItem.defaultProps = {
  children: null
};

export default ListItem;
