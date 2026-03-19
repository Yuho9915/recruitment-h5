import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionCard } from '../../components/QuestionCard';
import { QuestionListDrawer } from '../../components/QuestionListDrawer';
import { ConfirmDialog } from '../../components/ConfirmDialog';

interface Question {
  id: number;
  question: string;
  answer: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: '请介绍一下自己？',
    answer: '我是一名有3年工作经验的全栈工程师。我在前端、后端和数据库方面都有深入的了解。我擅长使用React、Node.js和MongoDB进行开发。在我的职业生涯中，我参与了多个大型项目，包括电商平台、社交媒体应用和数据分析系统。我热爱学习新技术，并且能够快速适应新的工作环境。'
  },
  {
    id: 2,
    question: '请讲讲你做过的项目？',
    answer: '我做过的最有意义的项目是一个电商平台的重构。该项目涉及前端性能优化、后端API设计和数据库优化。我主要负责前端架构设计和性能优化，通过代码分割、懒加载等技术，将首屏加载时间从5秒降低到1.5秒。同时，我也参与了后端API的设计和优化，使用缓存策略提高了系统的吞吐量。这个项目让我学到了很多关于系统设计和性能优化的知识。'
  }
];

export const InterviewSession = () => {
  const navigate = useNavigate();
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [questions, setQuestions] = useState(mockQuestions);
  const [questionListVisible, setQuestionListVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [elapsedTime, _setElapsedTime] = useState('00:03');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleRefreshAnswer = (questionId: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, answer: q.answer + '\n[已刷新]' }
          : q
      )
    );
  };

  const handleSelectQuestion = (id: number) => {
    setCurrentQuestionId(id);
    // 滚动到对应问题
    setTimeout(() => {
      const element = document.getElementById(`question-${id}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleEndInterview = () => {
    setConfirmVisible(true);
  };

  const handleConfirmEnd = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-bg pb-16">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl text-gray-400 active:opacity-70 transition-opacity leading-none"
          >
            ×
          </button>
          <h1 className="text-base font-semibold text-text-primary">
            面试辅助中
          </h1>
          <div className="w-6" />
        </div>

        {/* Questions Container */}
        <div
          ref={scrollContainerRef}
          className="px-4 py-4 space-y-4"
        >
          {questions.map((q) => (
            <div key={q.id} id={`question-${q.id}`}>
              <QuestionCard
                questionNumber={q.id}
                question={q.question}
                answer={q.answer}
                onRefresh={() => handleRefreshAnswer(q.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 max-w-sm mx-auto">
        <div className="px-4 py-3 flex items-center justify-between gap-3" style={{ height: '60px' }}>
          {/* End Interview Button */}
          <button
            onClick={handleEndInterview}
            className="flex flex-col items-center justify-center gap-1 active:opacity-70 transition-opacity h-full"
          >
            <div className="text-xl">🛑</div>
            <span className="text-xs text-red-500 font-medium">结束面试</span>
          </button>

          {/* Voice Recognition Area */}
          <div className="flex-1 flex flex-col items-center justify-center gap-1 h-full">
            <p className="text-xs text-text-tertiary">识别对话在此显示...</p>
            <div className="flex items-center gap-1">
              <div className="w-1 h-4 bg-primary rounded-full animate-pulse" />
              <div className="w-1 h-6 bg-primary rounded-full animate-pulse" />
              <div className="w-1 h-4 bg-primary rounded-full animate-pulse" />
            </div>
            <p className="text-xs text-text-tertiary">{elapsedTime}</p>
          </div>

          {/* Question List Button */}
          <button
            onClick={() => setQuestionListVisible(true)}
            className="flex flex-col items-center justify-center gap-1 active:opacity-70 transition-opacity h-full"
          >
            <div className="text-xl">📋</div>
            <span className="text-xs text-text-secondary font-medium">问题列表</span>
          </button>
        </div>
      </div>

      {/* Question List Drawer */}
      <QuestionListDrawer
        visible={questionListVisible}
        questions={questions}
        currentQuestionId={currentQuestionId}
        onClose={() => setQuestionListVisible(false)}
        onSelectQuestion={handleSelectQuestion}
      />

      {/* Confirm Dialog */}
      <ConfirmDialog
        visible={confirmVisible}
        title="结束面试"
        message="确认结束本次面试？"
        onConfirm={handleConfirmEnd}
        onCancel={() => setConfirmVisible(false)}
      />
    </div>
  );
};
