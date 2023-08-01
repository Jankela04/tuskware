import { Provider as WrapBalancerProvider } from "react-wrap-balancer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ubuntu } from "@/lib/fonts";
import TailwindScreenIndicator from "@/components/TWScreen";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Tuskware",
    template: "%s | Tuskware",
  },
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
        <WrapBalancerProvider>
          <Navbar />
          {children}
          <Footer />
          <TailwindScreenIndicator />
        </WrapBalancerProvider>
      </body>
    </html>
  );
}
