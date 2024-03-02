import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header/header";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/footer";


const inter = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Asar Portfolio",
  description: "Syed Asar Aman Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers >
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
