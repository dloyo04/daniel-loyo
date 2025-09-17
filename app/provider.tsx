"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { system } from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </NextThemesProvider>
  );
}