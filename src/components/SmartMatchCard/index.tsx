import { useNavigate } from 'react-router-dom';

export const SmartMatchCard = () => {
  const navigate = useNavigate();

  const handleMatch = () => {
    navigate('/smart-match');
  };

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-base font-semibold text-text-primary mb-1">
            智能岗位匹配
          </h3>
          <p className="text-sm text-text-secondary">
            一键匹配岗位，精准投递
          </p>
        </div>

        {/* Content Area */}
        <div className="flex items-center justify-between gap-3 bg-gray-50 rounded-lg p-3">
          {/* Left Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text-secondary truncate">
              累计999999+校招岗位信息
            </p>
          </div>

          {/* Right Button */}
          <button
            onClick={handleMatch}
            className="flex-shrink-0 px-4 py-2 bg-text-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity whitespace-nowrap"
          >
            智能匹配
          </button>
        </div>
      </div>
    </div>
  );
};
