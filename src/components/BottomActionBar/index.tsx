import { useState } from 'react';

interface ActionItem {
  id: string;
  icon: string;
  label: string;
}

interface BottomActionBarProps {
  onActionClick: (type: string) => void;
  activeAction?: string | null;
}

export const BottomActionBar = ({ onActionClick, activeAction }: BottomActionBarProps) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const actions: ActionItem[] = [
    {
      id: 'referral',
      icon: '🎁',
      label: '内推码'
    },
    {
      id: 'analysis',
      icon: '📊',
      label: '考情分析'
    },
    {
      id: 'handbook',
      icon: '📚',
      label: '知识手册'
    }
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
        <div className="max-w-sm mx-auto flex items-center justify-between px-4 py-2">
          {/* Left: Actions */}
          <div className="flex gap-4">
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={() => onActionClick(action.id)}
                className={`flex flex-col items-center gap-1 active:opacity-70 transition-all ${
                  activeAction === action.id ? 'text-primary' : ''
                }`}
              >
                <div className="text-xl">{action.icon}</div>
                <span className={`text-xs ${
                  activeAction === action.id ? 'text-primary font-medium' : 'text-text-secondary'
                }`}>
                  {action.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Copy Button */}
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
            style={{ height: '40px' }}
          >
            复制链接
          </button>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-3 rounded-lg z-50">
          复制成功
        </div>
      )}
    </>
  );
};
