import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Govind Ram | Laravel Developer",
  description:
    "Laravel Backend Developer with 3+ years of experience in PHP, Laravel, MySQL, REST APIs and CRM development.",
  keywords: [
    "Govind Ram",
    "Laravel Developer",
    "PHP Developer",
    "Backend Developer",
    "Laravel",
    "PHP",
    "MySQL",
    "REST API",
    "JavaScript",
    "ReactJS",
    "AngularJS",
  ],
  authors: [{ name: "Govind Ram" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        {children}
      </body>

      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-FY8Z6FJ80R" />
    </html>
  );
}