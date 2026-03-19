interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <div className="px-4 py-4">
      <button
        onClick={onClick}
        className="w-full px-4 py-3 bg-primary text-white text-base font-medium rounded-lg active:opacity-70 transition-opacity"
        style={{ height: '44px' }}
      >
        完成
      </button>
    </div>
  );
};
