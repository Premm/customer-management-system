import React from "react";
import C from "classnames";
import T from "prop-types";
import styled from "styled-components";

const StyledTable = styled.table`
  &.mb-table {
    display: block;
    width: 100%;
    thead {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    tbody {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

const Table = ({ children }) => {
  return <StyledTable className={C("mb-table")}>{children}</StyledTable>;
};

Table.propTypes = {
  children: T.node
};

Table.defaultProps = {
  children: null
};

export default Table;
