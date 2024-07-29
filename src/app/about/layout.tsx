import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Greg Creamer",
  description: "Welcome to Greg Creamer's website! This is where he keeps his portfolio and other examples of his work.",
  icons: [{ rel: "icon", url: "/gregicon64.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
