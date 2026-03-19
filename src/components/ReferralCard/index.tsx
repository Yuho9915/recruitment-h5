import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recruitment } from '../../types';

interface ReferralCardProps {
  referral: Recruitment & { referralCode: string };
}

export const ReferralCard = ({ referral }: ReferralCardProps) => {
  const navigate = useNavigate();
  const [showCode, setShowCode] = useState(false);

  const handleClick = () => {
    navigate(`/referral-detail/${referral.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-2 p-3 bg-white rounded-lg active:opacity-70 transition-opacity cursor-pointer"
    >
      {/* Main Content */}
      <div className="flex gap-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={referral.logo}
            alt={referral.title}
            className="w-20 h-20 rounded object-cover bg-gray-200"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-base font-semibold text-text-primary line-clamp-2 mb-2">
            {referral.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-2">
            {referral.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-text-secondary rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="flex justify-between text-xs text-text-tertiary">
            <span>{referral.updateTime}更新</span>
            <span>{referral.views}人浏览</span>
          </div>
        </div>
      </div>

      {/* Referral Code Section */}
      <div
        className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm text-text-secondary">
          内推码：{showCode ? referral.referralCode : '******'}
        </span>
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-sm text-primary font-medium active:opacity-70 transition-opacity"
        >
          {showCode ? '隐藏' : '查看'}
        </button>
      </div>
    </div>
  );
};
