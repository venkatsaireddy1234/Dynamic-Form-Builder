import  { useEffect, useState, useRef } from "react";
import { Snackbar, Alert, Button, LinearProgress, Box } from "@mui/material";

export default function ToastBar({ open, message, onClose }) {
  const [progress, setProgress] = useState(100);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // when opened, start progress countdown for 5s
    if (open) {
      setProgress(100);
      const tick = 50; // ms
      const steps = 5000 / tick;
      let step = 0;

      intervalRef.current = setInterval(() => {
        step += 1;
        const next = Math.max(0, 100 - (step / steps) * 100);
        setProgress(next);
      }, tick);

      // ensure it closes after 5s (Snackbar also has autoHideDuration)
      timeoutRef.current = setTimeout(() => {
        onClose?.();
      }, 5000);
    } else {
      // cleanup when closed
      setProgress(100);
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [open, onClose]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity="info"
        sx={{
          width: "100%",
          maxWidth: 360,
          boxSizing: "border-box",
          p: 3,
          position: "relative",
          overflow: "hidden",
        }}
        action={
          <Button color="inherit" size="small" onClick={onClose}>
            Cancel
          </Button>
        }
      >
        {message}
        <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              transform: "scaleX(1)",
            }}
          />
        </Box>
      </Alert>
    </Snackbar>
  );
}