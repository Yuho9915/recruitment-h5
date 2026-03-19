import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecruitmentCard } from '../../components/RecruitmentCard';
import { ReferralCard } from '../../components/ReferralCard';
import { JobMatchList } from '../../components/JobMatchList';
import { recruitments, referrals, jobMatchData, courses, products } from '../../mock/data';

const tabs = [
  { id: 'fair', label: '\u62db\u8058\u4f1a' },
  { id: 'jobs', label: '\u5c97\u4f4d' },
  { id: 'referral', label: '\u5185\u63a8\u7801' },
  { id: 'analysis', label: '\u8003\u60c5\u5206\u6790' },
  { id: 'handbook', label: '\u77e5\u8bc6\u624b\u518c' },
  { id: 'course', label: '\u8bfe\u7a0b' },
];

const favoriteData: Record<string, any[]> = {
  fair: recruitments,
  jobs: jobMatchData,
  referral: referrals,
  analysis: products,
  handbook: products,
  course: courses,
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="text-5xl mb-4">\ud83d\udce6</div>
    <p className="text-sm text-text-tertiary">暂无收藏内容</p>
  </div>
);

export const Favorite = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('fair');
  const data = favoriteData[activeTab] || [];

  const renderContent = () => {
    if (data.length === 0) return <EmptyState />;

    if (activeTab === 'fair') {
      return (
        <div className="px-4 py-3 space-y-3">
          {data.map((item: any, i: number) => (
            <RecruitmentCard key={i} recruitment={item} />
          ))}
        </div>
      );
    }

    if (activeTab === 'jobs') {
      return <JobMatchList data={data} />;
    }

    if (activeTab === 'referral') {
      return (
        <div className="px-4 py-3 space-y-3">
          {data.map((item: any, i: number) => (
            <ReferralCard key={i} referral={item} />
          ))}
        </div>
      );
    }

    if (activeTab === 'analysis' || activeTab === 'handbook') {
      return (
        <div className="px-4 py-3 space-y-3">
          {data.map((item: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 flex gap-3 p-3 cursor-pointer active:opacity-70"
              onClick={() => navigate('/product-detail/1')}
            >
              <img src={item.cover} alt={item.title} className="w-20 h-20 rounded object-cover bg-gray-200 flex-shrink-0" loading="lazy" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary line-clamp-2 mb-2">{item.title}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags?.map((tag: string, ti: number) => (
                    <span key={ti} className="text-xs text-text-tertiary">{tag}{ti < item.tags.length - 1 ? ' / ' : ''}</span>
                  ))}
                </div>
                <p className="text-xs text-text-tertiary mt-1">{item.buyers}人购买</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'course') {
      return (
        <div className="px-4 py-3 space-y-3">
          {data.map((item: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 flex gap-3 p-3 cursor-pointer active:opacity-70"
              onClick={() => navigate('/course/1')}
            >
              <img src={item.cover} alt={item.title} className="w-20 h-20 rounded object-cover bg-gray-200 flex-shrink-0" loading="lazy" />
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <p className="text-sm font-semibold text-text-primary line-clamp-2">{item.title}</p>
                <p className="text-xs text-text-tertiary mt-1">{item.buyers}人购买</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

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
            <span className="flex-1 text-center text-base font-semibold text-text-primary">我的收藏</span>
            <div className="w-6" />
          </div>
          {/* Tabs */}
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
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full" style={{ backgroundColor: '#1677FF' }} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};
