import { useContext } from "react";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import AuthContext from "../../../../context/AuthContext.js";
import { Link } from "react-router-dom";

export const AccountPopover = (props) => {
  const { user, logout } = useContext(AuthContext);

  const { anchorEl, onClose, open } = props;

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {user.name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={"/admin/user/profile"}
          >
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};
