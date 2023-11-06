import "./globals.css";
import Header from "@/components/header/header";
import { Dancing_Script } from "next/font/google";
import Footer from "@/components/footer/footer";

const inter = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Asar Portfolio",
  description: "Syed Asar Aman Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
