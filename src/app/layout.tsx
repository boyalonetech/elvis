import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Elvis | UI & UX Designer",
  description: "Creative UI & UX Designer who work with the latest design technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/elvis.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B0B12" />
        <meta
          name="description"
          content="Creative UI & UX Designer who work with the latest design technologies."
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
