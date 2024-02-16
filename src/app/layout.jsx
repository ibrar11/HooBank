import "./globals.css";
import { Header, Footer } from "../components";

export const metadata = {
  title: "HooBank",
  description: "HooBank with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
