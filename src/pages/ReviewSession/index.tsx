import { useState } from 'react';
import { BackHeader } from '../../components/BackHeader';

interface Question {
  id: number;
  question: string;
  answer: string;
  weakness: string;
  pendingPoints: string;
  highScoreExample: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: '请简要介绍一下自己。',
    answer: '我是一名软件工程师，具有3年工作经验，熟练掌握Java和Python。',
    weakness: '语言表达不够简洁',
    pendingPoints: '需要补充具体的项目经验',
    highScoreExample: '我在过去的3年里参与了多个项目，并且在团队中担任了领导角色，带领团队成功完成了多个大型项目。在技术方面，我深入掌握了Java、Python等编程语言，并在项目中得到了实际应用。'
  },
  {
    id: 2,
    question: '你在项目中的职责是什么？',
    answer: '在项目中，我负责系统设计和代码实现。',
    weakness: '没有突出展示团队合作能力',
    pendingPoints: '需要补充更多团队合作的细节',
    highScoreExample: '我在项目中担任了主要开发角色，同时也与团队成员紧密合作，确保项目按时交付。我负责系统架构设计、核心功能开发，并协调团队成员的工作，最终成功完成了项目目标。'
  }
];

export const ReviewSession = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);

  const selectedQuestion = mockQuestions.find(q => q.id === selectedQuestionId);

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Robot Icon Section */}
        <div className="flex justify-center py-6">
          <div className="text-6xl">🤖</div>
        </div>

        {/* Question Tabs */}
        <div className="px-4 mb-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {mockQuestions.map((q) => (
              <button
                key={q.id}
                onClick={() => setSelectedQuestionId(q.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedQuestionId === q.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-secondary border border-gray-200'
                }`}
              >
                问题{q.id}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {selectedQuestion && (
          <div className="px-4 pb-6 space-y-4">
            {/* Question & Answer Section */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  问题{selectedQuestion.id}：{selectedQuestion.question}
                </h3>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">
                  回答：
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {selectedQuestion.answer}
                </p>
              </div>
            </div>

            {/* Answer Weakness Section */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-text-primary mb-3">
                作答短板
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-sm">•</span>
                  <p className="text-sm text-text-secondary flex-1">
                    {selectedQuestion.weakness}
                  </p>
                </div>
              </div>
            </div>

            {/* Pending Points Section */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-text-primary mb-3">
                待补要点
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm">•</span>
                  <p className="text-sm text-text-secondary flex-1">
                    {selectedQuestion.pendingPoints}
                  </p>
                </div>
              </div>
            </div>

            {/* High Score Example Section */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-text-primary mb-3">
                高分范本
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">•</span>
                  <p className="text-sm text-text-secondary flex-1 leading-relaxed">
                    {selectedQuestion.highScoreExample}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
