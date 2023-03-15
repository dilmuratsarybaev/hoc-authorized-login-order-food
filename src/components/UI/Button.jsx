import React from "react";
import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material";
export const Button = ({ children, contained, borderStyled, ...rest }) => {
  return (
    <StyledButton {...rest} contained={contained} borderStyled={borderStyled}>
      {children}
    </StyledButton>
  );
};

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#7e2a0a" : "white";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#7e2a0a";
};
const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #7e2a0a";
};
const getBorderRadius = (props) => {
  return props.borderStyled === "rounded" ? "20px" : "6px";
};

const StyledButton = styled(MuiButton)((props) => ({
  backgroundColor: `${getBackgroundColor(props)}`,
  borderRadius: ` ${getBorderRadius(props)}`,
  padding: "8px 24px",
  fontSize: "16px",
  lineHeight: "25px",
  color: `${getColor(props)}`,
  border: `${getBorder(props)}`,
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  letterSpacing: "0.03em",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#7e2a0a",
    color: "#fff",
  },
  "&:active": {
    backgroundColor: "#993108",
  },
  " &:disabled": {
    backgroundColor: "#cac6c4",
  },
}));
