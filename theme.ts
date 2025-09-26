import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "var(--font-satoshi)" },
        heading: { value: "var(--font-satoshi)" },
      },
    },

    semanticTokens: {
      colors: {
        background: {
          value: { base: "{colors.white}", _dark: "#0A0A0A" },
        },
        heading: {
          value: { 
            base: "{colors.gray.900}",
            _dark: "{colors.white.200}"
          },
        },
        text: { 
          value: { 
            base: "{colors.gray.700}", 
            _dark: "{colors.gray.400}" 
          },
        },
        muted: { 
          value: { 
            base: "{colors.gray.500}",
            _dark: "{colors.gray.500}"
          },
        },
        
        primary: {
          value: { base: "{colors.black}", _dark: "{colors.white}" },
        },
        secondary: {
          value: { base: "{colors.gray.600}", _dark: "{colors.gray.400}" },
        },
      },
    },

    textStyles: {
      h1: {
        value: {
          fontSize: "3xl",      
          fontWeight: "normal", 
          color: "heading",
        },
      },
      h2: {
        value: {
          fontSize: "lg",       
          fontWeight: "normal", 
          color: "heading",
        },
      },
      h3: {
        value: {
          fontSize: "md",       
          fontWeight: "normal", 
          color: "heading",
        },
      },
      body: {
        value: {
          fontSize: "sm",       
          fontWeight: "normal", 
          color: "text",
          lineHeight: "1.7",    
        },
      },
      muted: {
        value: {
          fontSize: "sm",
          fontWeight: "normal",
          color: "muted",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);