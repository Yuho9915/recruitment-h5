import { useState } from 'react';
import { RecruitEvent } from '../../types';

interface RecruitEventCardProps {
  event: RecruitEvent;
}

export const RecruitEventCard = ({ event }: RecruitEventCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex gap-3 p-3 bg-white active:opacity-70 transition-opacity cursor-pointer">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src={event.logo}
          alt={event.title}
          className="w-20 h-20 rounded object-cover bg-gray-200"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h3 className="text-sm font-semibold text-text-primary mb-2">
          {event.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-text-secondary rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex gap-3 text-xs text-text-tertiary">
          <span>2小时前更新</span>
          <span>2.3k人浏览</span>
        </div>
      </div>

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="flex-shrink-0 active:scale-110 transition-transform"
        style={{ fontSize: '21px', lineHeight: '21px' }}
      >
        {isFavorite ? '⭐' : '☆'}
      </button>
    </div>
  );
};
