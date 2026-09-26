import type { Metadata } from "next";
import "./globals.css";
import { FitLogProvider } from "../context/FitLogContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "A simple workout library and plan tracker.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />
          {children}
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
