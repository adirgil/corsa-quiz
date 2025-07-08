"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Question = {
  id: string;
  text: string;
  imageUrl: string;
};

type QuizContextType = {
  questions: Question[];
  addQuestion: (q: Question) => void;
  clearQuestions: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used inside QuizProvider");
  return context;
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("quiz");
    if (stored) {
      setQuestions(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quiz", JSON.stringify(questions));
  }, [questions]);

  const addQuestion = (q: Question) => {
    setQuestions((prev) => [...prev, q]);
  };

  const clearQuestions = () => {
    setQuestions([]);
  };

  return (
    <QuizContext.Provider value={{ questions, addQuestion, clearQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}
