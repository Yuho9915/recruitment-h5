import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CompanyHeaderCardProps {
  logo: string;
  title: string;
  tags: string[];
  views: string;
}

export const CompanyHeaderCard = ({
  logo,
  title,
  tags,
  views
}: CompanyHeaderCardProps) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="sticky top-0 bg-white z-10 px-4 border-b border-gray-100" style={{ height: '31px' }}>
        <div className="max-w-sm mx-auto h-full flex items-center">
          <button
            onClick={handleBack}
            className="active:opacity-70 transition-opacity"
          >
            <svg
              className="w-6 h-6 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Company Header */}
      <div className="px-4 py-3">
        <div className="bg-white rounded-lg p-4 flex items-start gap-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={title}
              className="w-20 h-20 rounded object-cover bg-gray-200"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h1 className="text-base font-semibold text-text-primary mb-2">
              {title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-text-secondary rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Views with Icon */}
            <div className="flex items-center gap-1 text-xs text-text-tertiary">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>{views}</span>
            </div>
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex-shrink-0 active:scale-110 transition-transform"
            style={{ fontSize: '21px', lineHeight: '21px' }}
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>
      </div>
    </>
  );
};
