interface Question {
  id: number;
  question: string;
  answer: string;
}

interface QuestionListDrawerProps {
  visible: boolean;
  questions: Question[];
  currentQuestionId: number;
  onClose: () => void;
  onSelectQuestion: (id: number) => void;
}

export const QuestionListDrawer = ({
  visible,
  questions,
  currentQuestionId,
  onClose,
  onSelectQuestion
}: QuestionListDrawerProps) => {
  return (
    <>
      {/* Overlay */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/50 z-[1000]"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed left-0 right-0 bottom-0 bg-white z-[1001] max-w-sm mx-auto rounded-t-2xl transition-transform"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          maxHeight: '50vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h3 className="text-base font-semibold text-text-primary">
              问题列表
            </h3>
            <p className="text-xs text-text-tertiary mt-1">
              （{currentQuestionId}/{questions.length}）
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 active:opacity-70 transition-opacity leading-none"
          >
            ×
          </button>
        </div>

        {/* Question List */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => {
                onSelectQuestion(q.id);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg border transition-all ${
                q.id === currentQuestionId
                  ? 'bg-blue-50 border-primary'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              {/* Number */}
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold flex-shrink-0 ${
                  q.id === currentQuestionId
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-text-secondary'
                }`}
              >
                {index + 1}
              </div>

              {/* Question Text */}
              <p className="text-sm text-text-primary flex-1 text-left truncate">
                {q.question}
              </p>

              {/* Latest Badge */}
              {q.id === currentQuestionId && (
                <span className="text-xs bg-primary text-white px-2 py-1 rounded flex-shrink-0">
                  最新
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
