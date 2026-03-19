interface QuestionCardProps {
  questionNumber: number;
  question: string;
  answer: string;
  onRefresh: () => void;
}

export const QuestionCard = ({
  questionNumber,
  question,
  answer,
  onRefresh
}: QuestionCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
      {/* Question Section */}
      <div className="mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">❓</span>
          <span className="text-sm text-text-tertiary">问题{questionNumber}</span>
        </div>
        <p className="text-sm font-semibold text-text-primary">
          {question}
        </p>
      </div>

      {/* Answer Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">📖</span>
            <span className="text-sm font-semibold text-text-primary">回答</span>
          </div>
          <button
            onClick={onRefresh}
            className="text-gray-400 active:opacity-70 transition-opacity"
            title="刷新回答"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        <p className="text-xs text-gray-400 mb-3">
          以上内容由AI生成，结果仅供参考
        </p>

        <p className="text-sm text-text-primary leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};
