import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

interface ToastProps {
  message: string;
  type: any;
  open: boolean;
  close: () => void;
}

const Toast = ({ message, type, open, close }: ToastProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    close();
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
