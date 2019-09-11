import React from "react";
import C from "classnames";
import T from "prop-types";
import styled from "styled-components";

const StyledTableRow = styled.tr`
  &.mb-tablerow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &:nth-child(2n) {
      background: ${props => props.theme.colors.light};
    }
  }
`;

interface TableRowProps {
  children: React.ReactNode;
}

const TableRow = ({ children }: TableRowProps) => {
  return (
    <StyledTableRow className={C("mb-tablerow")}>{children}</StyledTableRow>
  );
};

TableRow.propTypes = {
  children: T.node
};

TableRow.defaultProps = {
  children: null
};

export default TableRow;
