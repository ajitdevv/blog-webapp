
import Footer from "@/components/Footer";
import "./globals.css";
import Hader from "@/components/Hader";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Hader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
