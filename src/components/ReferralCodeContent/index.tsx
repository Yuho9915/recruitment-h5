import { useState } from 'react';

interface ReferralCodeContentProps {
  code: string;
}

export const ReferralCodeContent = ({ code }: ReferralCodeContentProps) => {
  const [revealed, setRevealed] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <>
      <div className="p-6 flex flex-col items-center">
        {/* QR Code */}
        <div className="mb-6">
          <div
            className={`w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center transition-all ${
              revealed ? '' : 'blur-md'
            }`}
          >
            <span className="text-4xl">📱</span>
          </div>
        </div>

        {/* Referral Code Box */}
        <div className="w-full bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs text-text-tertiary mb-1">内推码</p>
            <p className="text-base font-semibold text-text-primary">
              {revealed ? code : '******'}
            </p>
          </div>
          <button
            onClick={revealed ? handleCopy : handleReveal}
            className="px-4 py-2 bg-primary text-white text-sm font-medium rounded active:opacity-70 transition-opacity"
          >
            {revealed ? '复制' : '查看'}
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
