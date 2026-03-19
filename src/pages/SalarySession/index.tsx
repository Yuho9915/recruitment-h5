import { useState } from 'react';
import { BackHeader } from '../../components/BackHeader';

interface Question {
  id: number;
  question: string;
  answer: string;
  weakness: string;
  highScoreExample: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: '请谈谈你的薪资期望？',
    answer: '我的期望薪资范围是12K-15K，取决于公司与职位要求。',
    weakness: '没有充分展示其他因素，比如工作环境和成长空间。',
    highScoreExample: '我期望的薪资在12K到15K之间，除了薪水，工作环境和职业发展机会也是我非常看重的因素。'
  },
  {
    id: 2,
    question: '你对于薪资结构有什么看法？',
    answer: '我希望薪资中能有更多绩效奖金和年终奖。',
    weakness: '没有强调个人能力的提升与薪资的关系。',
    highScoreExample: '我认为薪资结构应当和个人能力、业绩紧密挂钩，除了固定薪资，绩效奖金和年终奖也应占据一定比例。'
  }
];

const tips = [
  '谈薪时要自信，但不要过于强硬',
  '了解市场行情，做好充分准备',
  '强调自己的价值和能力',
  '考虑整体薪酬福利，不只是基本工资'
];

export const SalarySession = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [tipExpanded, setTipExpanded] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isManualMode, setIsManualMode] = useState(false);
  const [manualInput, setManualInput] = useState('');
  const [questionListVisible, setQuestionListVisible] = useState(false);

  const currentQuestion = mockQuestions.find(q => q.id === currentQuestionId);

  const handleSelectQuestion = (id: number) => {
    setCurrentQuestionId(id);
    setQuestionListVisible(false);
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        <div className="px-4 py-4 space-y-4">
          {/* Tip Section */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-text-primary">小技巧</h3>
              <button
                onClick={() => setTipExpanded(!tipExpanded)}
                className="text-primary active:opacity-70 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tipExpanded ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                </svg>
              </button>
            </div>
            {tipExpanded && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentTipIndex * 100}%)` }}
                  >
                    {tips.map((tip, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <p className="text-sm text-text-secondary leading-relaxed text-center">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  {tips.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTipIndex(index)}
                      className={`h-2 rounded-full transition-all ${index === currentTipIndex ? 'bg-primary w-4' : 'bg-gray-300 w-2'}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Question */}
          {currentQuestion && (
            <>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-2">
                  <span className="text-lg">👤</span>
                  <div className="flex-1">
                    <p className="text-xs text-text-tertiary mb-1">HR面试官</p>
                    <p className="text-sm font-semibold text-text-primary">{currentQuestion.question}</p>
                  </div>
                </div>
              </div>

              {/* Answer */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-2">
                  <span className="text-lg">💬</span>
                  <div className="flex-1">
                    <p className="text-xs text-text-tertiary mb-2">回答</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{currentQuestion.answer}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Mode Switch */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 py-3">
          {!isManualMode ? (
            <div className="flex items-center gap-3">
              {/* Manual Input Button */}
              <button
                onClick={() => setIsManualMode(true)}
                className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-text-primary rounded-lg active:opacity-70 transition-opacity"
                style={{ height: '60px', width: '72px' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="6" width="20" height="14" rx="2" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 10h2M10 10h2M14 10h2M6 14h4M12 14h2" />
                </svg>
                <span className="text-xs font-medium">手动输入</span>
              </button>

              {/* Voice Recognition Area */}
              <div className="flex-1 flex flex-col items-center justify-center gap-1 px-4 bg-blue-50 rounded-lg" style={{ height: '60px' }}>
                <p className="text-xs text-text-tertiary">识别对话在此显示...</p>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="w-1 h-6 bg-primary rounded-full animate-pulse" />
                  <div className="w-1 h-4 bg-primary rounded-full animate-pulse" />
                </div>
              </div>

              {/* Question List Button */}
              <button
                onClick={() => setQuestionListVisible(true)}
                className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-text-primary rounded-lg active:opacity-70 transition-opacity"
                style={{ height: '60px', width: '72px' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-xs font-medium">问题列表</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Text Input */}
              <input
                type="text"
                placeholder="请输入你的回答..."
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                style={{ height: '60px' }}
              />

              {/* Voice Button */}
              <button
                onClick={() => setIsManualMode(false)}
                className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-primary text-white rounded-lg active:opacity-70 transition-opacity"
                style={{ height: '60px', width: '72px' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                <span className="text-xs font-medium">语音</span>
              </button>

              {/* Question List Button */}
              <button
                onClick={() => setQuestionListVisible(true)}
                className="flex flex-col items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-text-primary rounded-lg active:opacity-70 transition-opacity"
                style={{ height: '60px', width: '72px' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-xs font-medium">问题</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Question List Drawer */}
      {questionListVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-[1000]"
          onClick={() => setQuestionListVisible(false)}
        />
      )}
      <div
        className="fixed left-0 right-0 bottom-0 bg-white z-[1001] max-w-sm mx-auto rounded-t-2xl transition-transform"
        style={{
          transform: questionListVisible ? 'translateY(0)' : 'translateY(100%)',
          maxHeight: '50vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-base font-semibold text-text-primary">问题列表</h3>
          <button
            onClick={() => setQuestionListVisible(false)}
            className="text-2xl text-gray-400 active:opacity-70 transition-opacity leading-none"
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {mockQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSelectQuestion(q.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                q.id === currentQuestionId ? 'bg-blue-50 border-primary' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold flex-shrink-0 ${
                  q.id === currentQuestionId ? 'bg-primary text-white' : 'bg-gray-200 text-text-secondary'
                }`}
              >
                {q.id}
              </div>
              <p className="text-sm text-text-primary flex-1 text-left">{q.question}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
