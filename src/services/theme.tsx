import { createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

export const useTheme = () => {
  const dark = "dark";

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const isDark = dark === "dark" || (dark === "follow" && prefersDarkMode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
          primary: {
            main: isDark ? "#ffffff" : "#000000",
          },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: "unset",
              },
            },
          },
          MuiCheckbox: {
            styleOverrides: {
              root: {
                color: "var(--primary) !important",
              },
            },
          },
          MuiSkeleton: {
            styleOverrides: {
              rectangular: {
                borderRadius: "6px",
              },
            },
          },
        },
        shape: {
          borderRadius: 6,
        },
      }),
    [isDark]
  );
  return theme;
};
