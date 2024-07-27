/* theme.ts */
import { components } from "@/slices";
import {
  Container,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import _default from "@emotion/styled";
import { containerTheme } from "./ContainerTheme";

export const theme = extendTheme(
  {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      primary: {
        _default: "#d0e7ff",
        "50": "#eff7ff",
        "100": "#d0e7ff",
        "200": "#bddfff",
        "300": "#90ccff",
        "400": "#5caffe",
        "500": "#368dfb",
        "600": "#1f6ef1",
        "700": "#1857dd",
        "800": "#1a47b3",
        "900": "#1b408d",
        "950": "#152856",
      },
      yellow: {
        yellow1: "#FFF4CB",
        yellow2: "#FFE789",
        yellow3: "#FFDF64",
        yellow4: "#FFD945",
        yellow5: "#FFCC08",
      },
      gray: {
        gray1: "#F5F5F5",
        gray2: "#EBEBEB",
        gray3: "#C2C2C2",
        gray4: "#5C5C5C",
        gray5: "#333333",
      },
    },
    fonts: {
      heading: "var(--font-bevietnampro)",
      body: "var(--font-bevietnampro)",
    },
    components: {
      Container: containerTheme,
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);
