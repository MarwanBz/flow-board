import { Locale, i18n } from "@/lib/i18n-config";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { siteConfig } from "../../../../config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: ` % s | ${ siteConfig.name }`,
  },
  description: siteConfig.description,
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}


export default function MarketingRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const  isValidLocale =  i18n.locales.includes(params.lang);

  if (!isValidLocale) {
    return null; // This will trigger a 404 page
  }

  return (
    <html lang={params.lang} dir={params.lang === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

