import "./globals.css";
import { Header } from "./components";

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
      </body>
    </html>
  );
}
