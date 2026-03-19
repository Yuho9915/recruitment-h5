import { useNavigate } from 'react-router-dom';

export const UserProfileCard = () => {
  const navigate = useNavigate();

  const handleRecharge = () => {
    navigate('/vip');
  };

  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
        {/* Left: Avatar and Info */}
        <div className="flex items-center gap-3 flex-1">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/48/48?random=999"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            {/* Name and VIP */}
            <div className="flex items-center gap-1 mb-1">
              <h3 className="text-base font-semibold text-text-primary">
                张三
              </h3>
              <span className="inline-flex items-center px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                VIP
              </span>
            </div>

            {/* Membership Info */}
            <p className="text-xs text-text-tertiary">
              会员有效期：2025-12-31
            </p>
          </div>
        </div>

        {/* Right: Recharge Button */}
        <button
          onClick={handleRecharge}
          className="flex-shrink-0 px-3.5 py-1.5 bg-primary text-white text-xs font-medium rounded active:opacity-70 transition-opacity whitespace-nowrap ml-3"
        >
          充值
        </button>
      </div>
    </div>
  );
};
