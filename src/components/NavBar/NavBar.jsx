import { Box, IconButton } from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const NavBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        width: "95vw",
        padding: 10,
        margin: 20,
        borderRadius: 8,
        border: "1px solid #ccc",
        gap: 12,
      }}
    >
      <Box>Home</Box>
      <Box></Box>
      <Box></Box>
      <Box>
        <IconButton aria-label="notifications">
          <NotificationsActiveIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
