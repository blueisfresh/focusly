import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { TaskProvider } from "@/contexts/TaskContext";
import App from "@/components/app";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Focusly",
  description: "Your future productivity tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.className} bg-zinc-100 text-stone-900 flex flex-col min-h-screen `}
      >
        <Header />
        <App></App>
        <Footer />
      </body>
    </html>
  );
}
