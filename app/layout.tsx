import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Lantern - Discover Your Cultural Identity",
  description: "A culture-based social platform for discovering yourself and others through art, books, films, music, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lantern-50 text-lantern-900 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
