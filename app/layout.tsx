import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./Component/Navigation";
import { Providers } from "./Chakra-page/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Sample Landing Page Only',
  icons: {
    icon: 'https://drive.google.com/uc?export=view&id=1czPtHOnb06NAo-awhCgsOgO_uHXNEUVU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Navigation />     
          {children}
        </Providers>
      </body>
    </html>
  );
}
