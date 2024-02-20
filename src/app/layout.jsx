import "./globals.css";
import { Header, Footer } from "../components";

export const metadata = {
  title: "HooBank",
  description: "HooBank with next js",
};

export function Icon() {}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svgs/hoo-bank.svg" />
      </head>
      <body className="bg-secondary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
