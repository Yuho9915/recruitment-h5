import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  type: string;
  content: string;
}

const favoriteQuestions: Question[] = [
  { id: 1, type: '\u5355\u9009\u9898', content: '\u4ee5\u4e0b\u54ea\u4e2a\u9009\u9879\u662fReact\u7684\u6838\u5fc3\u7279\u6027\uff1f' },
  { id: 2, type: '\u5224\u65ad\u9898', content: 'JavaScript\u662f\u9762\u5411\u5bf9\u8c61\u7684\u8bed\u8a00\uff0c\u8bf7\u5224\u65ad\u662f\u5426\u6b63\u786e\u3002' },
  { id: 3, type: '\u5355\u9009\u9898', content: '\u884c\u653f\u884c\u4e3a\u7684\u7279\u5f81\u4e0d\u5305\u62ec\u4ee5\u4e0b\u54ea\u4e00\u9879\uff1f' },
];

const wrongQuestions: Question[] = [
  { id: 4, type: '\u591a\u9009\u9898', content: '\u4ee5\u4e0b\u54ea\u4e9b\u5c5e\u4e8e\u524d\u7aef\u6846\u67b6\uff1f' },
  { id: 5, type: '\u5355\u9009\u9898', content: '\u7532\u3001\u4e59\u3001\u4e19\u4e09\u4eba\u7684\u5e74\u9f84\u4e4b\u548c\u4e3a72\u5c81\uff0c\u7532\u6bd4\u4e593\u5c81\uff0c\u4e59\u6bd4\u4e193\u5c81\uff0c\u5219\u7532\u7684\u5e74\u9f84\u662f\u591a\u5c11\uff1f' },
  { id: 6, type: '\u5224\u65ad\u9898', content: '\u884c\u653f\u884c\u4e3a\u7684\u65e0\u507f\u6027\u662f\u5176\u5fc5\u7136\u7279\u5f81\u3002' },
];

const typeColorMap: Record<string, string> = {
  '\u5355\u9009\u9898': 'bg-blue-50 text-blue-600',
  '\u591a\u9009\u9898': 'bg-purple-50 text-purple-600',
  '\u5224\u65ad\u9898': 'bg-green-50 text-green-600',
};

const QuestionCard = ({ question, isFavorite }: { question: Question; isFavorite: boolean }) => {
  const navigate = useNavigate();
  const colorClass = typeColorMap[question.type] || 'bg-blue-50 text-blue-600';

  return (
    <div
      onClick={() => navigate('/exam/1')}
      className="bg-white rounded-xl p-4 border border-gray-100 active:opacity-70 transition-opacity cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs px-2 py-0.5 rounded font-medium ${colorClass}`}>{question.type}</span>
        <span className="text-base">{isFavorite ? '\u2b50' : '\u274c'}</span>
      </div>
      <p className="text-sm text-text-primary leading-relaxed line-clamp-2">{question.content}</p>
    </div>
  );
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <span className="text-5xl mb-4">\ud83d\udcdd</span>
    <p className="text-sm text-text-tertiary">暂无题目</p>
  </div>
);

export const MyStudy = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'favorite' | 'wrong'>('favorite');

  const currentList = activeTab === 'favorite' ? favoriteQuestions : wrongQuestions;

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex items-center px-4" style={{ height: '44px' }}>
            <button onClick={() => navigate(-1)} className="active:opacity-70 mr-3">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="flex-1 text-center text-base font-semibold text-text-primary">我的学习</span>
            <div className="w-6" />
          </div>

          {/* Tabs */}
          <div className="flex">
            {([{ id: 'favorite', label: '\u6536\u85cf\u9898\u76ee' }, { id: 'wrong', label: '\u6211\u7684\u9519\u9898' }] as const).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id ? 'text-primary' : 'text-text-secondary'
                }`}
                style={{ height: '44px' }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                    style={{ width: '32px', backgroundColor: '#1677FF' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Question List */}
        <div className="px-4 py-3">
          {currentList.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-3">
              {currentList.map(q => (
                <QuestionCard key={q.id} question={q} isFavorite={activeTab === 'favorite'} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
