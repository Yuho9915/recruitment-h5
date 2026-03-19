import { useState } from 'react';

interface FilterOption {
  label: string;
  options: string[];
}

interface TopFilterDrawerProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: Record<string, string>) => void;
}

export const TopFilterDrawer = ({
  visible,
  onClose,
  onApply
}: TopFilterDrawerProps) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});

  const filterOptions: FilterOption[] = [
    { label: '届次', options: ['不限', '往届生', '2025届', '2026届'] },
    { label: '岗位类型', options: ['不限', '正式', '实习'] },
    { label: '企业类型', options: ['不限', '央企', '国企'] },
    { label: '学历', options: ['博士', '研究生', '本科', '大专', '大专以下'] },
    { label: '批次', options: ['不限', '春季招聘', '春招补录'] },
    { label: '更新时间', options: ['24h更新', '7天新增'] }
  ];

  const handleSelectFilter = (category: string, option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === option ? '' : option
    }));
  };

  const handleApply = () => {
    onApply(selectedFilters);
    onClose();
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-[1000]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed left-0 right-0 top-0 bg-white z-[1001] max-w-sm mx-auto rounded-b-lg transition-all"
        style={{
          maxHeight: '50vh',
          overflow: 'auto',
          marginTop: '31px'
        }}
      >
        {/* Filter Options */}
        <div className="p-4 space-y-4">
          {filterOptions.map((filter) => (
            <div key={filter.label}>
              <p className="text-sm font-semibold text-text-primary mb-2">
                {filter.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {filter.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelectFilter(filter.label, option)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedFilters[filter.label] === option
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-text-secondary'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <div className="sticky bottom-0 bg-white px-4 py-3 border-t border-gray-100">
          <button
            onClick={handleApply}
            className="w-full px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg active:opacity-70 transition-opacity"
          >
            应用筛选
          </button>
        </div>
      </div>
    </>
  );
};
