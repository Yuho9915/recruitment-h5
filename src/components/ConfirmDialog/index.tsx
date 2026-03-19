interface ConfirmDialogProps {
  visible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel
}: ConfirmDialogProps) => {
  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[1002]"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-[1003] max-w-sm mx-auto w-4/5 shadow-lg">
        <div className="p-6">
          {/* Title */}
          <h3 className="text-base font-semibold text-text-primary mb-2">
            {title}
          </h3>

          {/* Message */}
          <p className="text-sm text-text-secondary mb-6">
            {message}
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2 bg-gray-100 text-text-primary text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
            >
              取消
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
            >
              确认
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
