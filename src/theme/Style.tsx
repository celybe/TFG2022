import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "#000A0F")(props),
      },
      html: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "#000A0F")(props),
      },
    }),
  },
};
