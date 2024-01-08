import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { SideNavItem } from "./side-nav-item";
import { Link, useLocation } from "react-router-dom";
import { items } from "./config.jsx";
import { neutral } from "../../../../theme/colors.js";
import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext.js";
import { Scrollbar } from "../../../../components/admin/scrollbar.js";
import { Logo } from "../../../../components/admin/logo.jsx";
import { ucFirst } from "../../../../helpers/index.js";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { pathname } = useLocation();
  const currentPath = pathname.replace("/admin", "");

  const { user } = useContext(AuthContext);

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: neutral[400],
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={Link}
            href="/"
            sx={{
              display: "inline-flex",
              height: 32,
              width: 32,
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              p: "12px",
            }}
          >
            <div>
              <Typography color="inherit" variant="subtitle1">
                {user?.name}
              </Typography>
              <Typography color={neutral[400]} variant="body2">
                {ucFirst(user?.role)}
              </Typography>
            </div>
            <Tooltip title="Go to website">
              <Link to="/">
                <Button color="primary" size="small" variant="contained">
                  <ExitToAppIcon />
                </Button>
              </Link>
            </Tooltip>
          </Box>
        </Box>
        <Divider sx={{ borderColor: neutral[700] }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {items.map((item, idx) => {
              const active = currentPath === item.path;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: neutral[800],
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: neutral[800],
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
