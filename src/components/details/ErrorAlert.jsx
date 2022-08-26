import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const ErrorAlert = ({ error, setError, userName }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };
  return (
    <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={error.length>0 && userName.length>0}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%", color: "#fff", backgroundColor: "#ff0000" }}
        >
          {error}
        </Alert>
      </Snackbar>  )
}

export default ErrorAlert
