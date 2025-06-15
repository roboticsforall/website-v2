/* theme.ts */
import { components } from "@/slices";
import {Container} from "@chakra-ui/react";
import _default from "@emotion/styled";
import { containerTheme } from "./ContainerTheme";
import { buttonTheme } from "./ButtonTheme";
import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, 
  {
    theme: {
      tokens: {
        colors: {
          transparent: { value: "transparent"},
          black: { value: "#000"},
          white: { value: "#fff"},
          primary: {
            _default: { value: "#d0e7ff"},
            "50": { value: "#eff7ff"},
            "100": { value: "#d0e7ff"},
            "200": { value: "#bddfff"},
            "300": { value: "#90ccff"},
            "400": { value: "#5caffe"},
            "500": { value: "#368dfb"},
            "600": { value: "#1f6ef1"},
            "700": { value: "#1857dd"},
            "800": { value: "#1a47b3"},
            "900": { value: "#1b408d"},
            "950": { value: "#152856"},
          },
          yellow: {
            yellow1: { value: "#FFF4CB"},
            yellow2: { value: "#FFE789"},
            yellow3: { value: "#FFDF64"},
            yellow4: { value: "#FFD945"},
            yellow5: { value: "#FFCC08"},
          },
          gray: {
            gray1: { value: "#F5F5F5"},
            gray2: { value: "#EBEBEB"},
            gray3: { value: "#C2C2C2"},
            gray4: { value: "#5C5C5C"},
            gray5: { value: "#333333"},
          },
        },
        fonts: {
          heading: { value: "var(--font-bevietnampro)"},
          body: { value: "var(--font-bevietnampro)"},
        },
        // components: {
        //   Container: containerTheme,
        //   Button: buttonTheme,
        // },
      },
  },
})

