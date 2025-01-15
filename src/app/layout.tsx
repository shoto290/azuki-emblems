import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import Provider from "./provider";
import { Metadata } from "next";
import { WarningModal } from "./components/WarningModal";
import { Button } from "@/lib/ui/components/ui/button";
import Link from "next/link";

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
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <div className="z-50 fixed top-0 left-0 right-0 w-full h-14 bg-black flex items-center justify-center gap-2">
          Garden Emblem is leveling up
          <Link href="https://www.kiroshi.app/gallery/azuki">
            <Button>Go to Kiroshi.app</Button>
          </Link>
        </div>
        <div className={cn("px-4 pt-10 min-h-[80dvh] flex justify-center")}>
          <Provider>
            <div className="w-full max-w-[1400px] mt-4">{children}</div>
          </Provider>
          <Analytics />
          <WarningModal />
        </div>
      </body>
    </html>
  );
}
