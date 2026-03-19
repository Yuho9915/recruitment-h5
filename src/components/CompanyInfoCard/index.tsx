import { useNavigate } from 'react-router-dom';

interface CompanyInfoCardProps {
  companyId: number;
  companyName: string;
  companyLogo: string;
  companyTags: string[];
}

export const CompanyInfoCard = ({
  companyId,
  companyName,
  companyLogo,
  companyTags
}: CompanyInfoCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/company/${companyId}`);
  };

  return (
    <div className="px-4 py-3">
      <div
        onClick={handleClick}
        className="bg-white rounded-lg p-4 flex items-center gap-3 cursor-pointer active:opacity-70 transition-opacity"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={companyLogo}
            alt={companyName}
            className="w-12 h-12 rounded object-cover bg-gray-200"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-text-primary mb-2">
            {companyName}
          </h3>
          <div className="flex flex-wrap gap-1">
            {companyTags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-text-secondary rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
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
