import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Provider } from "@/components/ui/provider";
import { AnimatedBackground, ThemeSwitcher } from "@/UIComponents";
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
        url: "https://daniel-loyo.vercel.app/og-image.png",
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es" className="dark">
      <body className={`${satoshi.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
        <Provider>
          <AnimatedBackground />
          {children}
          <Toaster />
          <ThemeSwitcher />
        </Provider>
      </body>
    </html>
  );
}