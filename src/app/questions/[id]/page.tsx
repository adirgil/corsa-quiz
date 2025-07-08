"use client";

import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function QuestionPage({ params }: Props) {
  const { id } = params;
  const { questions } = useQuiz();

  const question = questions.find((q) => q.id === id);

  if (!question) {
    notFound();
  }

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Question ID: {question.id}</h1>
      <p className="text-lg">{question.text}</p>
      {question.imageUrl && (
        <Image
          src={question.imageUrl}
          alt="Question"
          className="rounded-md max-w-full"
          unoptimized
          width={500}
          height={300}
          loading="lazy"
        />
      )}
    </div>
  );
}
