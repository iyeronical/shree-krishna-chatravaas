import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '300', '500']
})

export const metadata: Metadata = {
  title: "Shree Krishna Chatravaas",
  description: "Created and developed by Cobble Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
