import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ubuntu } from "@/lib/fonts";
import TailwindScreenIndicator from "@/components/TWScreen";

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
        <TailwindScreenIndicator />
      </body>
    </html>
  );
}
