import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shayari Dunia | हर एहसास के लिए खूबसूरत शायरी",
  description: "Shayari Dunia पर पढ़ें Love, Sad, Romantic, Attitude, Dosti और Motivational Shayari. Copy, share और अपनी पसंद की शायरी खोजें。",
  verification: {
    google: "a_CiQfJW_OreqfkTzwJpx9107P9pIhnerfUtHZd8lQs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-50 antialiased relative selection:bg-pink-200 selection:text-pink-900`}
      >
        {/* Global Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <Navbar />
        <main className="flex-grow z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
