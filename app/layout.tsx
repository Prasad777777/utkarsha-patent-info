import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsha Ravindra Yais | Patent Portfolio",
  description:
    "Official Patent Portfolio of Utkarsha Ravindra Yais showcasing granted design patents and engineering innovations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}