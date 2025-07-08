"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { useRandomQuestion } from "@/hooks/useRandomQuestion";
import { toastError, toastSuccess } from "@/lib/toast";
import { Loader2 } from "lucide-react";

export default function QuestionForm() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { addQuestion } = useQuiz();
  const { fetchRandomQuestion, loading } = useRandomQuestion();

  const handleAdd = () => {
    if (!text.trim()) {
      toastError("Question text is required");
      return;
    }

    const id = Date.now().toString();
    addQuestion({ id, text, imageUrl });
    setText("");
    setImageUrl("");
    toastSuccess("Question added!", "You can now view it in the quiz.");
  };

  const handleFetchRandom = async () => {
    try {
      const question = await fetchRandomQuestion();
      if (question) {
        setText(question.text);
        setImageUrl(question.imageUrl);
        toastSuccess("Random question fetched!", "You can now edit it.");
      }
    } catch {
      toastError("Failed to fetch random question");
    }
  };

  return (
    <div className="max-w-md space-y-4">
      <Input
        placeholder="Enter question text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Input
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="flex gap-2">
        <Button onClick={handleAdd} disabled={loading}>
          Add Question
        </Button>
        <Button
          variant="outline"
          onClick={handleFetchRandom}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading...
            </div>
          ) : (
            "Random"
          )}
        </Button>
      </div>
    </div>
  );
}
