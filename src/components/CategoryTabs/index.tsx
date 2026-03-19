import { CategoryTab } from '../../types';

interface CategoryTabsProps {
  categories: CategoryTab[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  onFilterClick: () => void;
}

export const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
  onFilterClick
}: CategoryTabsProps) => {
  return (
    <div className="px-4 py-3 border-b border-gray-200">
      <div className="flex items-center justify-between gap-2">
        {/* Category Tabs */}
        <div className="flex gap-4 flex-1 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors relative ${
                activeCategory === category.id
                  ? 'text-primary'
                  : 'text-text-secondary'
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="flex items-center gap-1 px-3 py-1 text-sm text-text-secondary active:opacity-70 transition-opacity flex-shrink-0"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span>筛选</span>
        </button>
      </div>
    </div>
  );
};
