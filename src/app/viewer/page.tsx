"use client";

import { useQuiz } from "@/context/QuizContext";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ViewerPage() {
  const { questions } = useQuiz();
  const { username, profileImageUrl } = useSelector(
    (state: RootState) => state.userProfile
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    console.log("Answers:", answers);
    setAnswers({});
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {username && (
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={
              profileImageUrl ||
              "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            }
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
          <h2 className="text-xl font-semibold">Hello, {username}!</h2>
        </div>
      )}

      {questions.length === 0 ? (
        <p className="text-gray-500 italic">No questions yet.</p>
      ) : (
        questions.map((q) => (
          <div
            key={q.id}
            className="border rounded-lg p-4 space-y-2 bg-white shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{q.text}</p>
              <Link href={`/questions/${q.id}`}>
                <Button variant="link" className="text-sm">
                  View as Page
                </Button>
              </Link>
            </div>

            {q.imageUrl && (
              <Image
                src={q.imageUrl}
                alt="question"
                width={300}
                height={200}
                className="rounded"
              />
            )}
            <Textarea
              placeholder="Your answer..."
              value={answers[q.id] || ""}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
            />
          </div>
        ))
      )}

      {questions.length > 0 && (
        <Button onClick={handleSubmit}>Submit Answers & Reset</Button>
      )}
    </div>
  );
}
