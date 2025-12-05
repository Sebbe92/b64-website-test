import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "B64 - Din Salesforce Partner",
    template: "%s | B64",
  },
  description:
    "B64 implementerer og utvikler Salesforce og CRM-systemer. Vi hjelper deg med digitalisering og forretningsutvikling.",
  keywords: [
    "Salesforce",
    "CRM",
    "Salesforce partner",
    "implementering",
    "digitalisering",
    "Norge",
    "Oslo",
  ],
  authors: [{ name: "B64 AS" }],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://www.b64.no",
    siteName: "B64",
    title: "B64 - Din Salesforce Partner",
    description:
      "B64 implementerer og utvikler Salesforce og CRM-systemer. Vi hjelper deg med digitalisering og forretningsutvikling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B64 - Din Salesforce Partner",
    description:
      "B64 implementerer og utvikler Salesforce og CRM-systemer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
