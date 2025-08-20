import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// * Styles
import "./globals.css";

// * Providers
import { AppProvider } from "@/providers/app.provider";

// * Components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WOD Timer",
  description: "The Ultimate Timer for Your CrossFit Workouts: Train harder, train smarter with a timer designed for WODs",
  authors: [
    {
      name: 'Irving Salazar',
      url: 'https://ivin-dev.com'
    }
  ],
  metadataBase: new URL('https://wod-timer.com'), // Next will use this to make complete URLs from relative paths.
  // metadataBase: new URL('http://localhost:3000'), // Para pruebas de SEO en local
  alternates: {
    canonical: '/', // For the homepage, or specific path like '/articles/my-post'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <Toaster />
          <Sonner />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
