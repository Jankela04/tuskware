import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
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
      <body className={poppins.className}>{children}</body>
      <meta />
    </html>
  );
}
