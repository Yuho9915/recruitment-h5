import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { BannerCarousel } from '../../components/BannerCarousel';
import { SmartMatchCard } from '../../components/SmartMatchCard';
import { CategoryTabs } from '../../components/CategoryTabs';
import { FilterModal } from '../../components/FilterModal';
import { RecruitmentList } from '../../components/RecruitmentList';
import { BottomTabBar } from '../../components/BottomTabBar';
import { banners, recruitments, categories, filterOptions } from '../../mock/data';

export const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('latest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string[]>>({});

  const handleFilterApply = (filters: Record<string, string[]>) => {
    setAppliedFilters(filters);
  };

  // Filter recruitments based on active category and applied filters
  const filteredRecruitments = recruitments.filter((recruitment) => {
    // Category filter
    if (activeCategory === 'internet' && !recruitment.tags.includes('互联网')) {
      return false;
    }
    if (activeCategory === 'game' && !recruitment.tags.includes('游戏')) {
      return false;
    }
    if (activeCategory === 'state' && !recruitment.tags.includes('国央企')) {
      return false;
    }

    // Applied filters
    if (appliedFilters.industry?.length > 0) {
      const hasMatchingIndustry = appliedFilters.industry.some((industry) =>
        recruitment.tags.includes(industry)
      );
      if (!hasMatchingIndustry) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1 max-w-sm mx-auto w-full">
        {/* Search Bar */}
        <SearchBar value={searchValue} onChange={setSearchValue} />

        {/* Banner Carousel */}
        <BannerCarousel banners={banners} />

        {/* Smart Match Card */}
        <SmartMatchCard />

        {/* Hot Recruitment Section */}
        <div>
          <div className="px-4 py-3">
            <h2 className="text-lg font-semibold text-text-primary">热门招聘</h2>
          </div>

          {/* Category Tabs */}
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onFilterClick={() => setIsFilterOpen(true)}
          />

          {/* Recruitment List */}
          <RecruitmentList recruitments={filteredRecruitments} />
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="max-w-sm mx-auto w-full">
        <BottomTabBar />
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleFilterApply}
        filterOptions={filterOptions}
      />
    </div>
  );
};
