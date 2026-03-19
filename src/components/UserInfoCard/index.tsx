import { useNavigate } from 'react-router-dom';

export const UserInfoCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div className="px-4 py-3">
      <div
        onClick={handleClick}
        className="bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer active:opacity-70 transition-opacity"
      >
        {/* Left: Avatar */}
        <div className="flex-shrink-0">
          <img
            src="https://picsum.photos/48/48?random=999"
            alt="User Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Middle: User Info */}
        <div className="flex-1 px-4 min-w-0">
          <h3 className="text-base font-semibold text-text-primary mb-1">
            张三
          </h3>
          <p className="text-xs text-text-tertiary">
            账号：zhangsan123
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
