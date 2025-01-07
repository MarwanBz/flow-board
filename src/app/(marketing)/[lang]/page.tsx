// import "../globals.css";

import { Locale, i18n } from "@/lib/i18n-config";

import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskio - Organize. Collaborate. Achieve.",
  description:
    "Your tasks, simplified. The smart way to manage projects and boost productivity.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const isValidLocale = i18n.locales.includes(params.lang);

  if (!isValidLocale) {
    return null; // This will trigger a 404 page
  }

  return (
    <html lang={params.lang} dir={params.lang === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
