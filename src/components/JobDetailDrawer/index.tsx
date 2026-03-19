import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface JobDetailDrawerProps {
  visible: boolean;
  jobData: {
    id: number;
    title: string;
    degree: string;
    batch: string;
    graduate: string;
    major: string;
    city: string;
    requirement: string;
    description: string;
  } | null;
  company: string;
  companyTags: string[];
  companyId: number;
  onClose: () => void;
}

export const JobDetailDrawer = ({
  visible,
  jobData,
  company,
  companyTags,
  companyId,
  onClose
}: JobDetailDrawerProps) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  if (!jobData) return null;

  const handleCompanyClick = () => {
    navigate(`/company/${companyId}`);
    onClose();
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/job/${jobData.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <>
      {/* Overlay */}
      {visible && (
        <div
          className="fixed inset-0 bg-black/50 z-[1000]"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed left-0 right-0 bottom-0 bg-white z-[1001] max-w-sm mx-auto rounded-t-2xl transition-transform"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          maxHeight: '50vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-base font-semibold text-text-primary">
            岗位详情
          </h3>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 active:opacity-70 transition-opacity leading-none"
          >
            ×
          </button>
        </div>

        {/* Company Section */}
        <button
          onClick={handleCompanyClick}
          className="px-4 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0 active:opacity-70 transition-opacity"
        >
          <div className="flex-1 text-left">
            <h4 className="text-sm font-semibold text-text-primary mb-2">
              {company}
            </h4>
            <div className="flex flex-wrap gap-2">
              {companyTags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs bg-gray-100 text-text-secondary rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2"
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
        </button>

        {/* Job Info Section */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Job Title */}
          <div>
            <h4 className="text-base font-semibold text-text-primary mb-2">
              {jobData.title}
            </h4>
            <div className="flex items-center gap-2 text-xs text-text-tertiary mb-3">
              <span>{jobData.degree}</span>
              <span>|</span>
              <span>{jobData.graduate}</span>
              <span>|</span>
              <span>{jobData.batch}</span>
            </div>
          </div>

          {/* Major */}
          <div>
            <p className="text-xs text-text-tertiary mb-1">涉及专业</p>
            <p className="text-sm text-text-primary">{jobData.major}</p>
          </div>

          {/* City */}
          <div>
            <p className="text-xs text-text-tertiary mb-1">所在城市</p>
            <p className="text-sm text-text-primary">{jobData.city}</p>
          </div>

          {/* Requirement */}
          <div>
            <p className="text-xs font-semibold text-text-primary mb-2">
              任职要求
            </p>
            <p className="text-sm text-text-secondary whitespace-pre-line">
              {jobData.requirement}
            </p>
          </div>

          {/* Description */}
          <div>
            <p className="text-xs font-semibold text-text-primary mb-2">
              岗位描述
            </p>
            <p className="text-sm text-text-secondary whitespace-pre-line">
              {jobData.description}
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 flex-shrink-0" style={{ height: '56px' }}>
          <button
            onClick={handleCopyLink}
            className="flex-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity mr-2"
          >
            复制投递链接
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex-shrink-0 active:scale-110 transition-transform"
            style={{ fontSize: '24px', lineHeight: '24px' }}
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-3 rounded-lg z-50">
          复制成功
        </div>
      )}
    </>
  );
};
