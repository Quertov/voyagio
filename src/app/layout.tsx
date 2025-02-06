import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const roboto = Roboto({
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
      <body className={`${roboto.variable} antialiased`}>
        <Provider store={ store }>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
