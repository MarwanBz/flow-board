import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { siteConfig } from "../../config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: ` % s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/assets/logo-shape.svg",
      href: "/assets/logo-shape.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html >
        <body>
          <SignedOut>
            {/* <SignInButton /> */}
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
