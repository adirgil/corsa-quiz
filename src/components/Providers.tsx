"use client";

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import { QuizProvider } from "@/context/QuizContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/sonner";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <QuizProvider>
          <Toaster />
          {children}
        </QuizProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
