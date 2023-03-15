import { styled as styledMaterial } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Vector.svg";
import { getTheme } from "../../lib/constants/theme";
export const BasketButton = ({ count, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <BasketIcon />
      <Span>
        Your cart <StyledCounter>{count || 0}</StyledCounter>
      </Span>
    </StyledButton>
  );
};
const StyledButton = styledMaterial("button")(({theme}) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: "30px",
  padding: "10px 32px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",
  color: theme.palette.primary.contrastText,
  border: "none",
  display: "flex",
  alignItems: "center",
  " &:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  cursor: "pointer",
}));

const Span = styled.span`
  margin-left: 12px;
`;
const StyledCounter = styled.span`
  background: ${getTheme().palette.primary.main};
  border-radius: 30px;
  padding: 4px 15px;
  margin-left: 16px;
`;
