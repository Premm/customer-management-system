import React from "react";
import C from "classnames";
import T from "prop-types";

const Page = ({ children }) => {
  return <div className={C("mb-page")}>{children}</div>;
};

Page.propTypes = {
  children: T.node
};

Page.defaultProps = {
  children: null
};

export default Page;
