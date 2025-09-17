import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "Inter, sans-serif" },
        heading: { value: "'NB International Pro', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          value: { base: "{colors.white}", _dark: "{colors.gray.800}" },
        },
        text: {
          value: { base: "{colors.gray.800}", _dark: "{colors.gray.200}" },
        },
        primary: {
            value: { base: "{colors.black}", _dark: "{colors.white}" },
        },
        secondary: {
            value: { base: "{colors.gray.600}", _dark: "{colors.gray.400}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);