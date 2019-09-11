import React from "react";
import C from "classnames";
import T from "prop-types";

interface PageProps {
  children: React.ReactNode;
}
const Page = ({ children }: PageProps) => {
  return <div className={C("mb-page")}>{children}</div>;
};

Page.propTypes = {
  children: T.node
};

Page.defaultProps = {
  children: null
};

export default Page;
