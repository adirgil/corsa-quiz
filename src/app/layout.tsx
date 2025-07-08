import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Providers from "../components/Providers";
import { QuizProvider } from "@/context/QuizContext";
import { ThemeProvider } from "@/context/ThemeContext";

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
        <ThemeProvider>
          <Providers>
            <QuizProvider>
              <Header />
              <main className="p-6">{children}</main>
            </QuizProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
