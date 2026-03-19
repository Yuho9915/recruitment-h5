import { useState } from 'react';
import { BackHeader } from '../../components/BackHeader';

interface Question {
  id: number;
  image: string;
  description: string;
  answer: string;
}

const mockQuestions: Question[] = [
  { 
    id: 1, 
    image: 'https://picsum.photos/400/300?random=1', 
    description: '题目1描述',
    answer: '这是AI生成的答案示例。根据题目分析，我们可以得出以下结论：首先需要理解题目的核心要求，然后按照步骤进行解答。'
  },
  { 
    id: 2, 
    image: 'https://picsum.photos/400/300?random=2', 
    description: '题目2描述',
    answer: '这道题的解答思路是：第一步分析问题，第二步列出关键点，第三步给出完整答案。'
  },
  { 
    id: 3, 
    image: 'https://picsum.photos/400/300?random=3', 
    description: '题目3描述',
    answer: '根据题目要求，我们需要从以下几个方面来回答：1. 理论基础 2. 实践应用 3. 总结归纳。'
  }
];

export const ExamSession = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [questionListVisible, setQuestionListVisible] = useState(false);
  const [questions, setQuestions] = useState(mockQuestions);

  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  const handleRefresh = () => {
    const newQuestion = {
      id: currentQuestionId,
      image: `https://picsum.photos/400/300?random=${Date.now()}`,
      description: `题目${currentQuestionId}描述`,
      answer: '这是刷新后的AI生成答案。根据题目分析，我们可以得出以下结论：首先需要理解题目的核心要求，然后按照步骤进行解答。'
    };
    setQuestions(prev => prev.map(q => q.id === currentQuestionId ? newQuestion : q));
  };

  const handleNewQuestion = () => {
    const newId = questions.length + 1;
    const newQuestion = {
      id: newId,
      image: `https://picsum.photos/400/300?random=${Date.now()}`,
      description: `题目${newId}描述`,
      answer: '这是新题目的AI生成答案。根据题目要求，我们需要从以下几个方面来回答：1. 理论基础 2. 实践应用 3. 总结归纳。'
    };
    setQuestions(prev => [...prev, newQuestion]);
    setCurrentQuestionId(newId);
  };

  const handleSelectQuestion = (id: number) => {
    setCurrentQuestionId(id);
    setQuestionListVisible(false);
  };

  return (
    <div className="min-h-screen bg-bg pb-20">
      <div className="max-w-sm mx-auto">
        <BackHeader />

        <div className="px-4 py-4 space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-semibold text-text-primary mb-3">
              题目 {currentQuestionId}
            </h3>
            {currentQuestion && (
              <div className="w-full">
                <img
                  src={currentQuestion.image}
                  alt={currentQuestion.description}
                  className="w-full rounded-lg"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E图片加载失败%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-text-primary">答案</h3>
              <button onClick={handleRefresh} className="text-primary active:opacity-70 transition-opacity" title="刷新答案">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{currentQuestion?.answer}</p>
          </div>
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => setQuestionListVisible(true)} className="px-4 py-2 bg-gray-100 text-text-primary text-sm font-medium rounded-lg active:opacity-70 transition-opacity flex items-center justify-center gap-2" style={{ height: '48px', flex: '0 0 auto' }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>问题列表</span>
          </button>
          <button onClick={handleNewQuestion} className="flex-1 px-4 py-2 bg-primary text-white text-base font-medium rounded-lg active:opacity-70 transition-opacity" style={{ height: '48px' }}>再拍一题</button>
        </div>
      </div>

      <>
        {questionListVisible && <div className="fixed inset-0 bg-black/50 z-[1000]" onClick={() => setQuestionListVisible(false)} />}
        <div className="fixed left-0 right-0 bottom-0 bg-white z-[1001] max-w-sm mx-auto rounded-t-2xl transition-transform" style={{ transform: questionListVisible ? 'translateY(0)' : 'translateY(100%)', maxHeight: '50vh', display: 'flex', flexDirection: 'column' }}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
            <h3 className="text-base font-semibold text-text-primary">问题列表</h3>
            <button onClick={() => setQuestionListVisible(false)} className="text-2xl text-gray-400 active:opacity-70 transition-opacity leading-none">×</button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {questions.map((q) => (
              <button key={q.id} onClick={() => handleSelectQuestion(q.id)} className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${q.id === currentQuestionId ? 'bg-blue-50 border-primary' : 'bg-gray-50 border-gray-200'}`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold flex-shrink-0 ${q.id === currentQuestionId ? 'bg-primary text-white' : 'bg-gray-200 text-text-secondary'}`}>{q.id}</div>
                <img src={q.image} alt={q.description} className="w-16 h-16 rounded object-cover flex-shrink-0" />
                <p className="text-sm text-text-primary flex-1 text-left">{q.description}</p>
              </button>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};
