import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import AppProviders from "../components/Providers"; // renamed Providers -> AppProviders

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Corsa Quiz",
  description: "Quiz assignment for Tweed / Corsa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <Header />
          <main className="p-6">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
