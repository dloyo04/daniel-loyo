"use client";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme";
import { LazyMotion, domAnimation } from "framer-motion";

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <LazyMotion features={domAnimation} strict>
        <ColorModeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          {...props}
        />
      </LazyMotion>
    </ChakraProvider>
  );
}