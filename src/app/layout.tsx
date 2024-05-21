import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { WarningModal } from "./components/WarningModal";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Garden Emblems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={cn(
          "px-4 min-h-screen bg-background font-sans antialiased flex justify-center",
          fontSans.variable
        )}
      >
        <div className="w-full max-w-[1400px] mt-4">{children}</div>
        <Analytics />
        <WarningModal />
      </body>
    </html>
  );
}
