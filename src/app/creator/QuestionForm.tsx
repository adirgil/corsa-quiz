"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { useRandomQuestion } from "@/hooks/useRandomQuestion";
import { toast } from "sonner";

export default function QuestionForm() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { addQuestion } = useQuiz();
  const { fetchRandomQuestion, loading } = useRandomQuestion();

  const handleAdd = () => {
    if (!text.trim()) {
      toast.error("Question text is required");
      return;
    }

    const id = Date.now().toString();
    addQuestion({ id, text, imageUrl });
    setText("");
    setImageUrl("");
    toast("Question added!");
  };

  const handleFetchRandom = async () => {
    try {
      const question = await fetchRandomQuestion();
      if (question) {
        setText(question.text);
        setImageUrl(question.imageUrl);
        toast("Random question fetched!");
      }
    } catch {
      toast.error("Failed to fetch question");
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
          {loading ? "Loading..." : "Random"}
        </Button>
      </div>
    </div>
  );
}
