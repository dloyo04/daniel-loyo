import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Provider } from "@/components/ui/provider";
import { SiteFooter, ThemeSwitcher } from "@/UIComponents";
import { loadHomePageData } from "@/features";
import { Toaster } from "@/components/ui/toaster";

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2', 
  display: 'swap', 
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: "Daniel Loyo | Creative Developer",
  description: "Portafolio de desarrollo de Daniel Loyo, enfocado en Next.js, Arquitectura Limpia y experiencias de usuario elegantes.",
};

  const { socialLinks } = await loadHomePageData();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className={`${satoshi.variable} antialiased`}>

        <Provider>
          {children}
          <Toaster />
          <ThemeSwitcher />
          <SiteFooter socialLinks={socialLinks}/>
        </Provider>

      </body>
    </html>
  );
}