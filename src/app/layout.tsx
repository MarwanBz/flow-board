import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin",] });

export const metadata: Metadata = {
  title: "Taskio - Organize. Collaborate. Achieve.",
  description:
    "Your tasks, simplified. The smart way to manage projects and boost productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
