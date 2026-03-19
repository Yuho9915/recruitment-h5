import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RecordItem {
  id: number;
  title: string;
}

const tabs = [
  { id: 'interview', label: '\u9762\u8bd5\u52a9\u624b', path: '/interview-helper' },
  { id: 'review', label: '\u9762\u8bd5\u590d\u76d8', path: '/interview-review' },
  { id: 'exam', label: '\u7b14\u8bd5\u52a9\u624b', path: '/exam-helper' },
  { id: 'offer', label: 'offer\u5206\u6790', path: '/offer-analysis' },
  { id: 'salary', label: '\u8c08\u85aa\u52a9\u624b', path: '/salary-helper' },
];

const dataMap: Record<string, RecordItem[]> = {
  interview: [
    { id: 1, title: '\u4ea7\u54c1\u7ecf\u7406\u9762\u8bd5' },
    { id: 2, title: '\u540e\u7aef\u5de5\u7a0b\u5e08\u9762\u8bd5' },
  ],
  review: [
    { id: 3, title: '\u5b57\u8282\u8df3\u52a8\u590d\u76d8' },
  ],
  exam: [],
  offer: [],
  salary: [],
};

const FileIcon = () => (
  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const RecordCard = ({ item, onPress }: { item: RecordItem; onPress: () => void }) => (
  <button
    onClick={onPress}
    className="w-full flex items-center gap-3 bg-white rounded-xl px-4 py-4 border border-gray-100 shadow-sm active:opacity-70 transition-opacity text-left"
  >
    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
      <FileIcon />
    </div>
    <span className="text-sm font-medium text-text-primary flex-1">{item.title}</span>
    <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <FolderIcon />
    <p className="text-sm text-text-tertiary mt-4">暂无记录</p>
  </div>
);

export const AIRecord = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('interview');

  const currentTab = tabs.find(t => t.id === activeTab)!;
  const currentList = dataMap[activeTab] || [];

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-sm mx-auto">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex items-center px-4" style={{ height: '44px' }}>
            <button onClick={() => navigate(-1)} className="active:opacity-70 mr-3">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="flex-1 text-center text-base font-semibold text-text-primary">AI记录</span>
            <div className="w-6" />
          </div>
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id ? 'text-primary' : 'text-text-secondary'
                }`}
                style={{ height: '44px' }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full" style={{ width: '24px', backgroundColor: '#1677FF' }} />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-3">
          {currentList.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-3">
              {currentList.map(item => (
                <RecordCard key={item.id} item={item} onPress={() => navigate(currentTab.path)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
