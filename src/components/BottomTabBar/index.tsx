import { useNavigate, useLocation } from 'react-router-dom';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

const tabs: Tab[] = [
  {
    id: 'home',
    label: '首页',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    path: '/'
  },
  {
    id: 'referral',
    label: '内推广场',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
    path: '/referral'
  },
  {
    id: 'ai',
    label: 'AI直聘',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    path: '/ai-direct'
  },
  {
    id: 'learn',
    label: '学习广场',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6.18L23 9 12 3z" />
      </svg>
    ),
    path: '/study'
  },
  {
    id: 'profile',
    label: '我的',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    path: '/mine'
  }
];

export const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const tab = tabs.find((t) => t.path === location.pathname);
    return tab?.id || 'home';
  };

  const handleTabClick = (tab: Tab) => {
    navigate(tab.path);
  };

  const activeTab = getActiveTab();

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white z-100" style={{ height: '56px' }}>
      <div className="max-w-sm mx-auto h-full flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className="flex flex-col items-center justify-center flex-1 h-full active:opacity-70 transition-opacity"
            >
              <div
                className={`${
                  isActive ? 'text-primary' : 'text-text-tertiary'
                }`}
              >
                {tab.icon}
              </div>
              {!isActive && (
                <span className="text-xs text-text-tertiary mt-1">
                  {tab.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
