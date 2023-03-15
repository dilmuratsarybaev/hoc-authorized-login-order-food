import { Box, Modal as MuiModal } from "@mui/material";
import { styled } from "@mui/system";

export const Modal = ({ children, onClose }) => {
  return (
    <MuiModal open={true} onClose={onClose}>
      <StyledBox> {children}</StyledBox>
    </MuiModal>
  );
};

const StyledBox = styled(Box)({
  background: "#fff",
  position: "fixed",
  top: "20vh",
  padding: " 0rem 1rem",
  borderRadius: " 14px",
  boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.25)",
  zIndex: 30,
  animation: "slide-down 300ms ease-out forwards",
  width: "40rem",
  left: "calc(50% - 20rem)",
});
