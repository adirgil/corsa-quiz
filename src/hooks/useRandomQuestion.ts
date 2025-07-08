import { useState, useCallback } from "react";
import { Question } from "@/context/QuizContext";

export function useRandomQuestion() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuestion =
    useCallback(async (): Promise<Question | null> => {
      setLoading(true);
      setError(null);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const shouldFail = Math.random() < 0.5;

          if (shouldFail) {
            setError("Failed to fetch question.");
            setLoading(false);
            reject(null);
          } else {
            const randomId = Math.floor(Math.random() * 10000).toString();
            const question: Question = {
              id: randomId,
              text: `Random question #${randomId}`,
              imageUrl: `https://picsum.photos/seed/${randomId}/300/200`,
            };
            setLoading(false);
            resolve(question);
          }
        }, 2000);
      });
    }, []);

  return { fetchRandomQuestion, loading, error };
}
