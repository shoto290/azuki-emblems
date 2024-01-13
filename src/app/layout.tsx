import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Provider from "./provider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "px-10 min-h-screen bg-background font-sans antialiased flex justify-center",
          fontSans.variable
        )}
      >
        <div className="w-full max-w-[1400px]">
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </div>
      </body>
    </html>
  );
}
