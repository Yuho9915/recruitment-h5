import { useNavigate } from 'react-router-dom';
import { Recruitment } from '../../types';

interface RecruitmentCardProps {
  recruitment: Recruitment;
}

export const RecruitmentCard = ({ recruitment }: RecruitmentCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${recruitment.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex gap-3 p-3 bg-white rounded-lg active:opacity-70 transition-opacity cursor-pointer"
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src={recruitment.logo}
          alt={recruitment.title}
          className="w-20 h-20 rounded object-cover bg-gray-200"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h3 className="text-base font-semibold text-text-primary line-clamp-2 mb-2">
          {recruitment.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {recruitment.tags.map((tag, index) => (
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
          <span>{recruitment.updateTime}更新</span>
          <span>{recruitment.views}人浏览</span>
        </div>
      </div>
    </div>
  );
};
