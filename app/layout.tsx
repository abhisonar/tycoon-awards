import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import AOSInit from "@shared/base/AOSInit";
import ThemeRegistry from "@ui/shared-resources/themes/ThemeRegistry";
import LayoutComponent from "@layout/layout.component";
import { Suspense } from "react";
import AppLoading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tycoon Awards",
  description: "Award Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
        <Script src="https://kit.fontawesome.com/b8255e623e.js" crossOrigin="anonymous"></Script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <AOSInit />
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <Suspense fallback={<AppLoading />}>
            <LayoutComponent>{children}</LayoutComponent>
          </Suspense>
        </ThemeRegistry>
      </body>
    </html>
  );
}
