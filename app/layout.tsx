import type { Metadata } from "next";
import AuthWrapper from "../src/components/AuthWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmrSamir",
  description: "نحن هنا لتحويل أفكارك إلى تطبيقات ناجحة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}
