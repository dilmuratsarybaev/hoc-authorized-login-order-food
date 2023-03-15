import React from "react";
import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
export const Snackbar = ({
  isOpen,
  onClose,
  severity,
  message,
  autoHideDuration,
}) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={onClose}
      open={isOpen}
      autoHideDuration={autoHideDuration || 4000}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
