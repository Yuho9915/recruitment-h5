import { useNavigate } from 'react-router-dom';

export const BackHeaderFloat = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="fixed top-4 left-4 z-10">
      <button
        onClick={handleBack}
        className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center active:opacity-70 transition-opacity"
      >
        <svg
          className="w-6 h-6 text-white"
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
  );
};
