"use client";

import { useQuiz } from "@/context/QuizContext";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function QuestionPage() {
  const { id } = useParams();
  const { questions } = useQuiz();
  const router = useRouter();

  const question = questions.find((q) => q.id === id);

  if (!question) {
    return <div className="text-red-500">Question not found.</div>;
  }

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <Button variant="outline" onClick={() => router.push("/viewer")}>
        ← Back to Quiz List
      </Button>

      <p className="text-lg">{question.text}</p>

      {question.imageUrl && (
        <Image
          src={question.imageUrl}
          alt="Question"
          width={600}
          height={400}
          className="rounded-md"
          unoptimized
        />
      )}
    </div>
  );
}
