import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure the path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GEM_AI",
  description: "A Voice Assistant to Answer All Your Questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#07020c] text-white overflow-hidden flex items-center justify-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
