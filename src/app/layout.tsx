import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Provider from "./provider";
import { Metadata } from "next";

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
          "px-10 min-h-screen bg-background font-sans antialiased flex justify-center",
          fontSans.variable
        )}
      >
        <Provider>
          <div className="w-full max-w-[1400px] mt-4">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
