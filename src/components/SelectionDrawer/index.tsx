interface SelectionDrawerProps {
  title: string;
  options: string[];
  visible: boolean;
  onClose: () => void;
  onSelect: (option: string) => void;
}

export const SelectionDrawer = ({
  title,
  options,
  visible,
  onClose,
  onSelect
}: SelectionDrawerProps) => {
  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[1000]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed left-0 right-0 bottom-0 bg-white z-[1001] max-w-sm mx-auto rounded-t-lg"
        style={{
          maxHeight: '60vh',
          overflow: 'auto'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white px-4 py-4 border-b border-gray-100 flex items-center justify-between">
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

        {/* Options */}
        <div className="p-4 space-y-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(option);
                onClose();
              }}
              className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg active:opacity-70 transition-opacity"
            >
              <p className="text-sm text-text-primary">{option}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
