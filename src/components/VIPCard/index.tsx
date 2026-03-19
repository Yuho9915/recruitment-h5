import { useNavigate } from 'react-router-dom';

export const VIPCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/membership');
  };

  return (
    <div className="px-4 py-3">
      <div
        onClick={handleClick}
        className="bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer active:opacity-70 transition-opacity"
      >
        {/* Left: VIP Icon */}
        <div className="flex-shrink-0 text-3xl">
          👑
        </div>

        {/* Middle: VIP Info */}
        <div className="flex-1 px-4 min-w-0">
          <h3 className="text-sm font-semibold text-text-primary mb-1">
            VIP会员
          </h3>
          <p className="text-xs text-text-tertiary">
            会员到期：2025-12-31
          </p>
        </div>

        {/* Right: Arrow */}
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
