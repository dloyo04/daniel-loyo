import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Provider } from "@/components/ui/provider";

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2', 
  display: 'swap', 
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: "Daniel Loyo | Creative Developer",
  description: "Portafolio de desarrollo de Daniel Loyo, enfocado en Next.js, Arquitectura Limpia y experiencias de usuario elegantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className={`${satoshi.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}