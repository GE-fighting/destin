import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "遇见 Destin | Lumière d'Étoiles",
  description: "记录爱情旅程的每一刻",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
