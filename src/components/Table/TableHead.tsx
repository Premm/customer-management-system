import React from "react";
import C from "classnames";
import T from "prop-types";
import styled from "styled-components";

const StyledTableHead = styled.th`
  &.mb-tablehead {
    flex: 1;
    justify-content: flex-start;
    text-align: left;
    padding: ${props => props.theme.layout.padding};
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
  }
`;

interface TableHeadProps {
  children?: React.ReactNode;
}

const TableHead = ({ children }: TableHeadProps) => {
  return (
    <StyledTableHead className={C("mb-tablehead")}>{children}</StyledTableHead>
  );
};

TableHead.propTypes = {
  children: T.node
};

TableHead.defaultProps = {
  children: null
};

export default TableHead;
