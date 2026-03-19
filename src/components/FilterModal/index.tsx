import { useState } from 'react';
import { FilterOptions } from '../../types';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Record<string, string[]>) => void;
  filterOptions: FilterOptions;
}

export const FilterModal = ({
  isOpen,
  onClose,
  onApply,
  filterOptions
}: FilterModalProps) => {
  const [filters, setFilters] = useState<Record<string, string[]>>({
    session: [],
    education: [],
    nature: [],
    position: [],
    industry: []
  });

  const handleToggle = (category: string, value: string) => {
    setFilters((prev) => {
      const current = prev[category] || [];
      if (current.includes(value)) {
        return {
          ...prev,
          [category]: current.filter((v) => v !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...current, value]
        };
      }
    });
  };

  const handleReset = () => {
    setFilters({
      session: [],
      education: [],
      nature: [],
      position: [],
      industry: []
    });
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg z-50 max-w-sm mx-auto">
        {/* Header */}
        <div className="sticky top-0 px-4 py-3 border-b border-gray-200 bg-white rounded-t-lg">
          <h2 className="text-base font-semibold">筛选</h2>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-96 px-4 py-4 pb-20">
          {/* 招聘届次 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-text-primary">招聘届次</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.session.map((item) => (
                <button
                  key={item}
                  onClick={() => handleToggle('session', item)}
                  className={`px-3 py-1.5 text-sm rounded transition-all ${
                    filters.session.includes(item)
                      ? 'bg-blue-100 border border-primary text-primary'
                      : 'border border-gray-300 text-text-secondary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 学历要求 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-text-primary">学历要求</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.education.map((item) => (
                <button
                  key={item}
                  onClick={() => handleToggle('education', item)}
                  className={`px-3 py-1.5 text-sm rounded transition-all ${
                    filters.education.includes(item)
                      ? 'bg-blue-100 border border-primary text-primary'
                      : 'border border-gray-300 text-text-secondary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 企业性质 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-text-primary">企业性质</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.nature.map((item) => (
                <button
                  key={item}
                  onClick={() => handleToggle('nature', item)}
                  className={`px-3 py-1.5 text-sm rounded transition-all ${
                    filters.nature.includes(item)
                      ? 'bg-blue-100 border border-primary text-primary'
                      : 'border border-gray-300 text-text-secondary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 岗位性质 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-text-primary">岗位性质</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.position.map((item) => (
                <button
                  key={item}
                  onClick={() => handleToggle('position', item)}
                  className={`px-3 py-1.5 text-sm rounded transition-all ${
                    filters.position.includes(item)
                      ? 'bg-blue-100 border border-primary text-primary'
                      : 'border border-gray-300 text-text-secondary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 企业行业 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3 text-text-primary">企业行业</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.industry.map((item) => (
                <button
                  key={item}
                  onClick={() => handleToggle('industry', item)}
                  className={`px-3 py-1.5 text-sm rounded transition-all ${
                    filters.industry.includes(item)
                      ? 'bg-blue-100 border border-primary text-primary'
                      : 'border border-gray-300 text-text-secondary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto flex gap-3 px-4 py-3 bg-white border-t border-gray-200">
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 text-sm font-medium text-text-secondary border border-gray-300 rounded active:opacity-70 transition-opacity"
          >
            重置
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary rounded active:opacity-70 transition-opacity"
          >
            确定
          </button>
        </div>
      </div>
    </>
  );
};
