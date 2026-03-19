import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SmartMatchCard } from '../../components/SmartMatchCard';
import { UserProfileCard } from '../../components/UserProfileCard';
import { AIToolCard } from '../../components/AIToolCard';
import { BottomTabBar } from '../../components/BottomTabBar';
import { HistoryRecordDrawer } from '../../components/HistoryRecordDrawer';
import { historyRecords } from '../../mock/data';

const aiTools = [
  {
    id: 'interview',
    icon: '🎤',
    title: '面试辅助',
    description: '识别面试问题，获得专业回答',
    path: '/ai-interview'
  },
  {
    id: 'review',
    icon: '📄',
    title: '面试复盘',
    description: '通过面试复盘，提升面试能力',
    path: '/ai-review'
  },
  {
    id: 'exam',
    icon: '📷',
    title: '笔试辅助',
    description: '拍照识别笔试问题，获得答案',
    path: '/ai-exam'
  },
  {
    id: 'salary',
    icon: '💰',
    title: '谈薪辅助',
    description: '谈薪助手，精准应对，锁定高薪',
    path: '/ai-salary'
  }
];

export const AIDirectPage = () => {
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerType, setDrawerType] = useState<'interview' | 'review' | 'exam' | 'salary' | null>(null);

  const handleToolEnter = (toolId: string) => {
    const type = toolId as 'interview' | 'review' | 'exam' | 'salary';
    setDrawerType(type);
    setDrawerVisible(true);
  };

  const handleNewRecord = () => {
    const paths = {
      interview: '/interview/form',
      review: '/review/form',
      exam: '/exam/form',
      salary: '/salary/form'
    };
    if (drawerType) {
      navigate(paths[drawerType]);
      setDrawerVisible(false);
    }
  };

  const getRecords = () => {
    if (!drawerType) return [];
    return historyRecords[drawerType] || [];
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1 max-w-sm mx-auto w-full">
        <UserProfileCard />
        <SmartMatchCard />
        <div>
          {aiTools.map((tool) => (
            <AIToolCard
              key={tool.id}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              onEnter={() => handleToolEnter(tool.id)}
            />
          ))}
        </div>
      </div>
      <div className="max-w-sm mx-auto w-full">
        <BottomTabBar />
      </div>
      <HistoryRecordDrawer
        visible={drawerVisible}
        type={drawerType}
        records={getRecords()}
        onClose={() => setDrawerVisible(false)}
        onNewRecord={handleNewRecord}
      />
    </div>
  );
};
