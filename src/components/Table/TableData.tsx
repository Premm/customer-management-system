import React from "react";
import C from "classnames";
import T from "prop-types";
import styled from "styled-components";

const StyledTableData = styled.td`
  &.mb-tabledata {
    display: flex;
    flex: 1;
  }
`;

interface TableDataProps {
  children?: React.ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return (
    <StyledTableData className={C("mb-tabledata")}>{children}</StyledTableData>
  );
};

TableData.propTypes = {
  children: T.node
};

TableData.defaultProps = {
  children: null
};

export default TableData;
