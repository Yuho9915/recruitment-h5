import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { examQuestions } from '../../mock/examData';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const ExamPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reviewMode: boolean = location.state?.reviewMode || false;
  const savedAnswers: Record<number, number> = location.state?.answers || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>(savedAnswers);
  const [seconds, setSeconds] = useState(0);
  const [favorited, setFavorited] = useState(false);

  const mockQuestions: Question[] = examQuestions;
  const currentQuestion = mockQuestions[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === mockQuestions.length - 1;
  const userAnswer = answers[currentQuestion.id];
  const isCorrect = userAnswer === currentQuestion.correctAnswer;

  useEffect(() => {
    if (reviewMode) return;
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, [reviewMode]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, '0');
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  const handleSelect = (index: number) => {
    if (reviewMode) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: index }));
  };

  const handleSubmit = () => {
    navigate('/exam/result/1', { state: { answers, totalSeconds: seconds, questions: mockQuestions } });
  };

  const getOptionStyle = (optionIndex: number) => {
    if (!reviewMode) {
      return userAnswer === optionIndex
        ? 'border-primary bg-blue-50 text-primary'
        : 'border-gray-200 bg-white text-text-primary';
    }
    if (optionIndex === currentQuestion.correctAnswer) return 'border-green-500 bg-green-50 text-green-700';
    if (userAnswer === optionIndex && !isCorrect) return 'border-red-500 bg-red-50 text-red-600';
    return 'border-gray-200 bg-white text-text-secondary';
  };

  const getOptionIcon = (optionIndex: number) => {
    if (!reviewMode) return null;
    if (optionIndex === currentQuestion.correctAnswer) {
      return <span className="text-green-500 ml-2 flex-shrink-0 font-bold">V</span>;
    }
    if (userAnswer === optionIndex && !isCorrect) {
      return <span className="text-red-500 ml-2 flex-shrink-0 font-bold">X</span>;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      <div className="max-w-sm mx-auto">
        <BackHeader onBack={() => navigate('/study', { state: { tab: 'exam' } })} />
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100">
          <span className="text-sm font-medium text-text-secondary">{currentIndex + 1}/{mockQuestions.length}</span>
          {!reviewMode && <span className="text-sm font-medium text-text-secondary">{formatTime(seconds)}</span>}
          {reviewMode && <span className="text-xs px-2 py-1 bg-blue-50 text-primary rounded-full">解析模式</span>}
        </div>
        <div className="px-4 py-4">
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <p className="text-sm font-semibold text-text-primary leading-relaxed mb-4">
              {currentIndex + 1}. {currentQuestion.question}
            </p>
            <div className="space-y-3">
              {currentQuestion.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm flex items-center justify-between ${getOptionStyle(i)}`}
                >
                  <span>{option}</span>
                  {getOptionIcon(i)}
                </button>
              ))}
            </div>
            {reviewMode && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-semibold text-text-primary mb-1">解析</p>
                <p className="text-xs text-text-secondary leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => setFavorited(f => !f)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all active:scale-95 ${
              favorited ? 'bg-yellow-50 border-2 border-yellow-400' : 'bg-gray-100 border-2 border-transparent'
            }`}
          >
            {favorited ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FACC15"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            )}
          </button>
          <button
            onClick={() => setCurrentIndex(i => i - 1)}
            disabled={isFirst}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
              isFirst ? 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed' : 'border-primary text-primary active:opacity-70'
            }`}
          >
            上一题
          </button>
          {isLast ? (
            <button
              onClick={reviewMode ? () => navigate(-1) : handleSubmit}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white active:opacity-70"
              style={{ backgroundColor: '#1677FF' }}
            >
              {reviewMode ? '完成解析' : '交卷'}
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex(i => i + 1)}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white active:opacity-70"
              style={{ backgroundColor: '#1677FF' }}
            >
              下一题
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
