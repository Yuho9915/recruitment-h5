import { useNavigate } from 'react-router-dom';

interface FunctionItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}

const functions: FunctionItem[] = [
  { id: 'favorite', icon: '\u2764\ufe0f', label: '\u6211\u7684\u6536\u85cf', path: '/favorite' },
  { id: 'learning', icon: '\ud83d\udcda', label: '\u6211\u7684\u9898\u76ee', path: '/my-study' },
  { id: 'ai-record', icon: '\ud83e\udd16', label: 'AI\u8bb0\u5f55', path: '/ai-record' }
];

export const CommonFunctions = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-sm font-semibold text-text-primary mb-4">常用功能</h3>
        <div className="flex justify-around">
          {functions.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
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
