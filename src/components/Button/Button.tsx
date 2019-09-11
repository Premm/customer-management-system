import React from "react";
import C from "classnames";
import T from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  &.mb-btn {

    border: none;
    outline: none;
    padding:  ${props => props.theme.layout.padding}

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &.btn-primary {
      background: ${props => props.theme.colors.primary}
      color:${props => props.theme.colors.secondary}
      &:hover {
        background: ${props => props.theme.colors.primaryDark}
      }
    }
    &.btn-secondary {
      background: ${props => props.theme.colors.secondary}
      color:${props => props.theme.colors.primary}
      &:hover {
        background: ${props => props.theme.colors.secondaryDark}
      }
    }
    &.btn-lg {
      font-size: 1.2rem;
    }
    &.btn-sm {
      font-size: 0.8rem;
    }
  }
`;

const StyledLink = styled(Link)`
  &.mb-btn {
    border: none;
    outline: none;
    text-decoration: none;
    padding:  ${props => props.theme.layout.padding}
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.btn-primary {
      background: ${props => props.theme.colors.primary}
      color:${props => props.theme.colors.secondary}
      &:hover {
        background: ${props => props.theme.colors.primaryDark}
      }
    }
    &.btn-secondary {
      background: ${props => props.theme.colors.secondary}
      color:${props => props.theme.colors.primary}
      &:hover {
        background: ${props => props.theme.colors.secondaryDark}
      }
    }
    &.btn-lg {
      font-size: 1.2rem;
    }
    &.btn-sm {
      font-size: 0.8rem;
    }
  }
`;

const typeMapper: {
  [index: string]: string;
  primary: string;
  secondary: string;
  dark: string;
  light: string;
} = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  dark: "btn-dark",
  light: "btn-light"
};

const sizeMapper: {
  [index: string]: string;
  small: string;
  large: string;
} = {
  small: "btn-sm",
  large: "btn-lg"
};

interface ButtonProps {
  children?: React.ReactNode;
  size?: string;
  type?: string;
  onClick?: () => void;
  to?: string;
}

const Button = ({ children, size, type, onClick, to }: ButtonProps) => {
  return to ? (
    <StyledLink
      className={C(
        "mb-btn",
        type ? typeMapper[type] : "btn-primary",
        size && sizeMapper[size]
      )}
      to={to}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      className={C(
        "mb-btn",
        type ? typeMapper[type] : "btn-primary",
        size && sizeMapper[size]
      )}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: T.string,
  size: T.string,
  type: T.string,
  onClick: T.func,
  to: T.string
};

Button.defaultProps = {
  children: null,
  size: null,
  type: "primary",
  onClick: null,
  to: null
};

export default Button;
