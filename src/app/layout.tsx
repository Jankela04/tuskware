import Navbar from "@/components/Navbar";
import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "TuskWare",
  description:
    "Embark on a captivating journey into the world of mammoths with TuskWare. Discover and shop for majestic mammoths and a variety of mammoth-related tools. Explore our unique collection and bring the awe-inspiring essence of the Ice Age to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
