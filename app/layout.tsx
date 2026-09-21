import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My WDD430 portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}