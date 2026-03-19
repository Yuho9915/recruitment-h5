import { ReactNode, useEffect } from 'react';

interface BottomDrawerProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const BottomDrawer = ({
  title,
  visible,
  onClose,
  children
}: BottomDrawerProps) => {
  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-30"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed left-0 right-0 bg-white z-40 max-w-sm mx-auto overflow-hidden"
        style={{
          bottom: '60px',
          borderRadius: '16px 16px 0 0',
          height: '400px'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
          <h3 className="text-base font-semibold text-text-primary">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 active:opacity-70 transition-opacity leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full pb-14">
          {children}
        </div>
      </div>
    </>
  );
};
