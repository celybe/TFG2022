import logo from "assets/images/logo.svg";
import light from "assets/icons/light.svg";
import night from "assets/icons/night.svg";

import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import React, { useContext } from "react";
import ToggleColorMode from "components/toggle/ThemeToggle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Navigation() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div className="navigation-content">
      <div className="logo-content">
        <img src={logo} alt="logo" />
      </div>
      <div className="links-content">
        <Link
          component={RouterLink}
          to="/home"
          underline="none"
          color="inherit"
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/features"
          underline="none"
          color="inherit"
        >
          Features
        </Link>
        <Link
          component={RouterLink}
          to="/about"
          underline="none"
          color="inherit"
        >
          About
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          underline="none"
          color="inherit"
        >
          Contact
        </Link>

        <Link
          component={RouterLink}
          to="/pricing"
          underline="none"
          color="inherit"
        >
          Pricing
        </Link>
      </div>
      <div className="mode-content">
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
      <div className="buttons-content">
        <Button href="/login" variant="text">
          Login
        </Button>
        <Button href="/register" variant="contained">
          Sign up
        </Button>
      </div>
    </div>
  );
}
