import { useNavigate } from 'react-router-dom';

interface BackHeaderProps {
  onBack?: () => void;
}

export const BackHeader = ({ onBack }: BackHeaderProps = {}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
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
  );
};
