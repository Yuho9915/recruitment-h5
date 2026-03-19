import { useNavigate } from 'react-router-dom';

interface FunctionItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}

const functions: FunctionItem[] = [
  { id: 'grass', icon: '\ud83c\udf31', label: '\u6211\u7684\u79cd\u8349', path: '/referral-growth' },
  { id: 'orders', icon: '\ud83d\udce6', label: '\u8ba2\u5355\u8bb0\u5f55', path: '/order-record' },
  { id: 'about', icon: '\u2139\ufe0f', label: '\u5173\u4e8e\u6211\u4eec', path: '/about' },
  { id: 'feedback', icon: '\ud83d\udcdd', label: '\u610f\u89c1\u53cd\u9988', path: '/feedback' },
  { id: 'contact', icon: '\ud83d\udcde', label: '\u8054\u7cfb\u6211\u4eec', path: '/contact' },
  { id: 'privacy', icon: '\ud83d\udd12', label: '\u9690\u79c1\u534f\u8bae', path: '/privacy' },
  { id: 'terms', icon: '\ud83d\udcc4', label: '\u6ce8\u518c\u534f\u8bae', path: '/terms' },
  { id: 'settings', icon: '\u2699\ufe0f', label: '\u7cfb\u7edf\u8bbe\u7f6e', path: '/settings' },
];

export const MoreFunctions = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-sm font-semibold text-text-primary mb-4">其他功能</h3>
        <div className="grid grid-cols-3 gap-4">
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
