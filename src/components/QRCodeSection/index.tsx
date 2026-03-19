import { useState } from 'react';

interface QRCodeSectionProps {
  qr: string;
  code: string;
}

export const QRCodeSection = ({ qr, code }: QRCodeSectionProps) => {
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
      <div className="px-4 py-3">
        <div className="bg-white rounded-lg p-6 flex flex-col items-center">
          {/* QR Code */}
          <div className="mb-6">
            <img
              src={qr}
              alt="QR Code"
              className={`w-50 h-50 rounded-lg transition-all ${
                revealed ? '' : 'blur-md'
              }`}
              style={{ width: '200px', height: '200px' }}
            />
          </div>

          {/* Referral Code */}
          <div className="mb-6 text-center">
            <p className="text-sm text-text-tertiary mb-2">内推码</p>
            <p
              className="text-base font-semibold text-text-primary"
              style={{ letterSpacing: '2px' }}
            >
              {revealed ? code : '------'}
            </p>
          </div>

          {/* Button */}
          <button
            onClick={revealed ? handleCopy : handleReveal}
            className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
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
