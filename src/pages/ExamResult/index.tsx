import { useNavigate, useLocation } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const ExamResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers = {}, totalSeconds = 0, questions = [] } = location.state || {};

  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const correctCount = questions.filter((q: Question) => answers[q.id] === q.correctAnswer).length;
  const wrongCount = answeredQuestions - correctCount;
  const correctRate = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const wrongRate = totalQuestions > 0 ? Math.round((wrongCount / totalQuestions) * 100) : 0;

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, '0');
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  const getQuestionStatus = (q: Question) => {
    if (answers[q.id] === undefined) return 'unanswered';
    if (answers[q.id] === q.correctAnswer) return 'correct';
    return 'wrong';
  };

  const handleRetry = () => {
    navigate('/exam/1', { state: { answers: {}, reviewMode: false } });
  };

  const handleReview = () => {
    navigate('/exam/1', { state: { answers, reviewMode: true } });
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      <div className="max-w-sm mx-auto">
        <BackHeader onBack={() => navigate('/study', { state: { tab: 'exam' } })} />

        <div className="px-4 py-4 space-y-4">
          {/* Result Stats */}
          <div className="bg-white rounded-lg p-5 border border-gray-100">
            <div className="flex items-center justify-around">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-text-primary">{formatTime(totalSeconds)}</span>
                <span className="text-xs text-text-tertiary">答题时间</span>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-red-500">{wrongRate}%</span>
                <span className="text-xs text-text-tertiary">错误率</span>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold" style={{ color: '#52C41A' }}>{correctRate}%</span>
                <span className="text-xs text-text-tertiary">正确率</span>
              </div>
            </div>
          </div>

          {/* Question Grid */}
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <h3 className="text-sm font-semibold text-text-primary mb-3">题目概览</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q: Question, index: number) => {
                const status = getQuestionStatus(q);
                return (
                  <div
                    key={q.id}
                    className={`w-full aspect-square flex items-center justify-center rounded-lg text-sm font-medium border-2 ${
                      status === 'correct'
                        ? 'border-green-500 text-green-600 bg-green-50'
                        : status === 'wrong'
                        ? 'border-red-500 text-red-500 bg-red-50'
                        : 'border-gray-300 text-text-tertiary bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded border-2 border-green-500 bg-green-50" />
                <span className="text-xs text-text-tertiary">正确</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded border-2 border-red-500 bg-red-50" />
                <span className="text-xs text-text-tertiary">错误</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded border-2 border-gray-300 bg-gray-50" />
                <span className="text-xs text-text-tertiary">未做</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="flex gap-3 px-4 py-4">
          <button
            onClick={handleRetry}
            className="flex-1 py-3 border border-primary text-primary text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
          >
            重新练习
          </button>
          <button
            onClick={handleReview}
            className="flex-1 py-3 text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
            style={{ backgroundColor: '#1677FF' }}
          >
            查看解析
          </button>
        </div>
      </div>
    </div>
  );
};
