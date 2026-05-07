"use client";

import Link from "next/link";
import { examSets } from "@/data/exam-sets";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-exam-blue tracking-wider uppercase">
            ESE 2030 — Linear Algebra for Engineers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-exam-dark">
            Practice Quizzam
          </h1>
          <p className="text-lg text-exam-unanswered">
            Choose a practice exam below
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {examSets.map((set) => (
            <Link
              key={set.id}
              href={`/exam?set=${set.id}`}
              className="block bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-exam-blue hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-semibold text-exam-dark mb-2">
                {set.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{set.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>{set.questions.length} problems</span>
                <span>120 minutes</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-exam-surface border border-gray-200 rounded-xl p-6 text-left space-y-3">
          <h2 className="text-sm font-semibold text-exam-dark">General Instructions</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li>No books, notes, or calculators. Use logic.</li>
            <li>Select one answer per problem. Each problem has one best answer.</li>
            <li>In some problems, a wrong choice may be worth partial credit.</li>
            <li>If anything is unclear, use your best judgment.</li>
            <li>Your progress is saved automatically — refreshing the page won&apos;t lose answers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
