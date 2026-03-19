interface AIToolCardProps {
  icon: string;
  title: string;
  description: string;
  onEnter: () => void;
}

export const AIToolCard = ({
  icon,
  title,
  description,
  onEnter
}: AIToolCardProps) => {
  return (
    <div className="px-4 py-3">
      <div className="bg-white rounded-lg p-4 flex items-center justify-between">
        {/* Left: Icon and Text */}
        <div className="flex items-center gap-3 flex-1">
          {/* Icon */}
          <div className="flex-shrink-0 text-3xl">
            {icon}
          </div>

          {/* Text Area */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text-primary mb-1">
              {title}
            </h3>
            <p className="text-xs text-text-tertiary">
              {description}
            </p>
          </div>
        </div>

        {/* Right: Enter Button */}
        <button
          onClick={onEnter}
          className="flex-shrink-0 text-sm text-primary font-medium active:opacity-70 transition-opacity ml-3 whitespace-nowrap"
        >
          进入
        </button>
      </div>
    </div>
  );
};
