import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { BannerCarousel } from '../../components/BannerCarousel';
import { CategoryTabs } from '../../components/CategoryTabs';
import { FilterModal } from '../../components/FilterModal';
import { ReferralList } from '../../components/ReferralList';
import { BottomTabBar } from '../../components/BottomTabBar';
import { banners, referrals, categories, filterOptions } from '../../mock/data';

export const Referral = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('latest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string[]>>({});

  const handleFilterApply = (filters: Record<string, string[]>) => {
    setAppliedFilters(filters);
  };

  // Filter referrals based on active category and applied filters
  const filteredReferrals = referrals.filter((referral) => {
    // Category filter
    if (activeCategory === 'internet' && !referral.tags.includes('互联网')) {
      return false;
    }
    if (activeCategory === 'game' && !referral.tags.includes('游戏')) {
      return false;
    }
    if (activeCategory === 'state' && !referral.tags.includes('国央企')) {
      return false;
    }

    // Applied filters
    if (appliedFilters.industry?.length > 0) {
      const hasMatchingIndustry = appliedFilters.industry.some((industry) =>
        referral.tags.includes(industry)
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

        {/* Hot Referral Section */}
        <div>
          <div className="px-4 py-3">
            <h2 className="text-lg font-semibold text-text-primary">热门内推</h2>
          </div>

          {/* Category Tabs */}
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onFilterClick={() => setIsFilterOpen(true)}
          />

          {/* Referral List */}
          <ReferralList referrals={filteredReferrals} />
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
