import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    //TODO verificar fuente final
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
        heading: { // Para Títulos (H1, H2, H3)
          value: { 
            base: "{colors.gray.900}", // Negro en modo claro
            _dark: "{colors.white.200}"      // Blanco en modo oscuro
          },
        },
        text: { // Para Párrafos / Texto principal
          value: { 
            base: "{colors.gray.700}", // Gris oscuro en modo claro
            _dark: "{colors.gray.400}"      // Gris claro en modo oscuro
          },
        },
        muted: { // Para texto secundario (fechas, tags, etc.)
          value: { 
            base: "{colors.gray.500}", // Gris en modo claro
            _dark: "{colors.gray.500}"      // Gris más oscuro en modo oscuro
          },
        },
        // Colores de la marca para elementos interactivos
        primary: {
          value: { base: "{colors.black}", _dark: "{colors.white}" },
        },
        secondary: {
          value: { base: "{colors.gray.600}", _dark: "{colors.gray.400}" },
        },
      },
    },

    // 3. ESTILOS DE TEXTO REUTILIZABLES
    // Combinamos tamaño, peso y color en estilos fáciles de aplicar.
    textStyles: {
      h1: {
        value: {
          fontSize: "xl",      // 24px
          fontWeight: "normal", // 500 (Delgado con jerarquía)
          color: "heading",
        },
      },
      h2: {
        value: {
          fontSize: "lg",       // 20px
          fontWeight: "normal", // 500
          color: "heading",
        },
      },
      h3: {
        value: {
          fontSize: "md",       // 16px
          fontWeight: "normal", // 500
          color: "heading",
        },
      },
      body: {
        value: {
          fontSize: "sm",       // 14px
          fontWeight: "normal", // 400 (Delgado)
          color: "text",
          lineHeight: "1.7",    // Mayor espacio para legibilidad
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