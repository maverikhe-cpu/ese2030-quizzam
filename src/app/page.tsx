import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-exam-blue tracking-wider uppercase">
            ESE 2030 — Linear Algebra for Engineers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-exam-dark">
            Practice Final Exam
          </h1>
          <p className="text-lg text-exam-unanswered">
            Quizzam — 43 Multiple-Choice Problems
          </p>
        </div>

        <div className="bg-exam-surface border border-gray-200 rounded-xl p-6 md:p-8 text-left space-y-4">
          <h2 className="text-lg font-semibold text-exam-dark">Instructions</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="font-medium text-exam-dark">Time:</span>
              120 minutes (auto-submits when time expires)
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-exam-dark">Format:</span>
              43 multiple-choice problems, 5 choices each (A–E)
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-exam-dark">Scoring:</span>
              1 point per correct answer. Select problems carry partial credit (0.5 pts).
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-exam-dark">Coverage:</span>
              Full 13-week arc — Weeks 1 through 12, plus synthesis problems
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-exam-dark">Select one answer per problem.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-exam-dark">In some problems, a wrong choice may be worth partial credit.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            href="/exam"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-exam-blue text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors"
          >
            Begin Exam
          </Link>
          <p className="text-xs text-exam-unanswered">
            Your progress is saved automatically. You can refresh the page without losing answers.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6 text-xs text-gray-400 space-y-1">
          <p>No books, notes, or calculators. Use logic.</p>
          <p>If anything is unclear, use your best judgment.</p>
        </div>
      </div>
    </div>
  );
}
