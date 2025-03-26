import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import ClientProvider from "./ClientProvider";

const montserrat = Montserrat({
  variable: '--roboto-font',
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
});

export const metadata: Metadata = {
  title: "Voyagio",
  description: "One step for you trip",
  icons: '/icon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ClientProvider>
          <Header />
          { children }
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
