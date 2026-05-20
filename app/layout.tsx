import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YeniEv Dijital — Adana Mobilya & Çeyiz Meta Reklam Ajansı",
  description: "Adana'daki mobilya mağazaları ve çeyiz firmalarına özel Meta (Instagram + Facebook) reklam yönetimi. Ayda 120 mesajdan 600'e çıkın.",
  keywords: "adana mobilya reklam, adana çeyiz reklam, meta reklam ajansı, instagram reklam adana, facebook reklam adana",
  verification: {
    google: "efH-LelN_3dOidrnJHf2yJQQBHxkSKcWVFfGPnPZVSc",
  },
  openGraph: {
    title: "YeniEv Dijital — Adana Mobilya & Çeyiz Meta Reklam Ajansı",
    description: "Adana'daki mobilya mağazaları ve çeyiz firmalarına özel Meta reklam yönetimi.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%237B5CF0'/><text y='.9em' font-size='70' x='50%' text-anchor='middle' dominant-baseline='auto' font-family='Arial' font-weight='bold' fill='white'>Y</text></svg>" />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
