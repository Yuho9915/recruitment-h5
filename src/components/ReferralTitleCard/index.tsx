import { useState } from 'react';

interface ReferralTitleCardProps {
  title: string;
}

export const ReferralTitleCard = ({ title }: ReferralTitleCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="px-4 py-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-text-primary flex-1 text-center">
        {title}
      </h1>
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="flex-shrink-0 active:scale-110 transition-transform"
        style={{ fontSize: '24px', lineHeight: '24px' }}
      >
        {isFavorite ? '⭐' : '☆'}
      </button>
    </div>
  );
};
