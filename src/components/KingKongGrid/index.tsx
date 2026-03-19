import { useNavigate } from 'react-router-dom';

interface KingKongItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}

const items: KingKongItem[] = [
  {
    id: 'state',
    icon: '🏛',
    label: '国央企',
    path: '/learning/state-owned'
  },
  {
    id: 'internet',
    icon: '💻',
    label: '互联网',
    path: '/category/internet'
  },
  {
    id: 'bank',
    icon: '🏦',
    label: '银行',
    path: '/category/bank'
  },
  {
    id: 'securities',
    icon: '📈',
    label: '证券',
    path: '/category/securities'
  }
];

export const KingKongGrid = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.path)}
              className="flex flex-col items-center gap-2 active:opacity-70 transition-opacity"
            >
              <div className="text-3xl">{item.icon}</div>
              <span className="text-xs text-text-secondary">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
