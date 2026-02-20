import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bila Security & Cleaning Services",
  description:
    "Reliable security & cleaning services across South Africa. Armed & unarmed guards, residential & commercial cleaning. PSIRA compliant. Call us today!",
  keywords:
    "security services south africa, cleaning services south africa, armed guards, unarmed guards, psira registered, bila security",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark text-primary min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
