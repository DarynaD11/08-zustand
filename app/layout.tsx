import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";
import "./globals.css";
import Providers from "../components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const robotoSans = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub",
  description:
    "NoteHub is a simple and efficient application designed for managing personal notes.",

  openGraph: {
    title: "NoteHub",
    description:
      "NoteHub is a simple and efficient application designed for managing personal notes.",
    url: "https://notehub.com/notes/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
    type: "website",
    siteName: "NoteHub",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} ${geistSans.variable}`}>
        <Providers>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
