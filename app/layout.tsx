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
  metadataBase: new URL("https://daniel-loyo.vercel.app"), 
  
  title: {
    default: "Daniel Loyo - Dev",
    template: "%s | Daniel Loyo",
  },

  description: "Portafolio de Daniel Loyo Software Devepoler, ven a ver mis proyectos!",

  openGraph: {
    title: "Daniel Loyo - Dev",
    description: "Explora mis proyectos de Desarrollo Web!",
    url: "https://daniel-loyo.vercel.app", 
    siteName: "Portafolio de Daniel Loyo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_VE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
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