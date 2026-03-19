interface FilterBarProps {
  selectedMajor: string;
  selectedCity: string;
  onMajorClick: () => void;
  onCityClick: () => void;
  onFilterClick: () => void;
}

export const FilterBar = ({
  selectedMajor,
  selectedCity,
  onMajorClick,
  onCityClick,
  onFilterClick
}: FilterBarProps) => {
  return (
    <div className="px-4 py-3 flex gap-2">
      {/* Major Filter */}
      <button
        onClick={onMajorClick}
        className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-text-secondary active:opacity-70 transition-opacity truncate"
      >
        {selectedMajor || '专业筛选'}
      </button>

      {/* City Filter */}
      <button
        onClick={onCityClick}
        className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-text-secondary active:opacity-70 transition-opacity truncate"
      >
        {selectedCity || '城市筛选'}
      </button>

      {/* Filter Button */}
      <button
        onClick={onFilterClick}
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-text-secondary active:opacity-70 transition-opacity flex-shrink-0"
      >
        筛选
      </button>
    </div>
  );
};
