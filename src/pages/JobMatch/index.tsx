import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackHeader } from '../../components/BackHeader';
import { SearchBar } from '../../components/SearchBar';
import { FilterBar } from '../../components/FilterBar';
import { TopFilterDrawer } from '../../components/TopFilterDrawer';
import { JobMatchList } from '../../components/JobMatchList';
import { JobDetailDrawer } from '../../components/JobDetailDrawer';
import { jobMatchData } from '../../mock/data';

interface Job {
  id: number;
  title: string;
  degree: string;
  batch: string;
  graduate: string;
  major: string;
  city: string;
  requirement: string;
  description: string;
}

export const JobMatch = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filterDrawerVisible, setFilterDrawerVisible] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string>>({});
  const [jobDetailDrawerVisible, setJobDetailDrawerVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCompanyTags, setSelectedCompanyTags] = useState<string[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(0);

  const handleMajorClick = () => {
    navigate('/search-major');
  };

  const handleCityClick = () => {
    navigate('/search-city');
  };

  const handleFilterApply = (filters: Record<string, string>) => {
    setAppliedFilters(filters);
  };

  const handleJobArrowClick = (job: Job, company: string, companyTags: string[], companyId: number) => {
    setSelectedJob(job);
    setSelectedCompany(company);
    setSelectedCompanyTags(companyTags);
    setSelectedCompanyId(companyId);
    setJobDetailDrawerVisible(true);
  };

  // 从localStorage读取已选择的值
  useEffect(() => {
    const major = localStorage.getItem('selectedMajor');
    const city = localStorage.getItem('selectedCity');

    if (major) {
      setSelectedMajor(major);
      localStorage.removeItem('selectedMajor');
    }
    if (city) {
      setSelectedCity(city);
      localStorage.removeItem('selectedCity');
    }
  }, []);

  // 过滤岗位列表
  const filteredData = useMemo(() => {
    return jobMatchData
      .map((group) => ({
        ...group,
        jobs: group.jobs.filter((job) => {
          // 搜索过滤
          if (searchText) {
            const searchLower = searchText.toLowerCase();
            if (
              !group.company.toLowerCase().includes(searchLower) &&
              !job.title.toLowerCase().includes(searchLower)
            ) {
              return false;
            }
          }

          // 专业过滤
          if (selectedMajor && selectedMajor !== '不限专业') {
            if (!job.major.includes(selectedMajor)) {
              return false;
            }
          }

          // 城市过滤
          if (selectedCity && selectedCity !== '全国') {
            if (job.city !== selectedCity) {
              return false;
            }
          }

          // 应用的筛选条件
          if (appliedFilters['届次'] && job.graduate !== appliedFilters['届次']) {
            return false;
          }
          if (appliedFilters['学历'] && job.degree !== appliedFilters['学历']) {
            return false;
          }
          if (appliedFilters['批次'] && job.batch !== appliedFilters['批次']) {
            return false;
          }

          return true;
        })
      }))
      .filter((group) => group.jobs.length > 0);
  }, [searchText, selectedMajor, selectedCity, appliedFilters]);

  return (
    <div className="min-h-screen bg-bg pb-20">
      <div className="max-w-sm mx-auto">
        {/* Back Header */}
        <BackHeader />

        {/* Search Bar */}
        <SearchBar value={searchText} onChange={setSearchText} />

        {/* Filter Bar */}
        <FilterBar
          selectedMajor={selectedMajor}
          selectedCity={selectedCity}
          onMajorClick={handleMajorClick}
          onCityClick={handleCityClick}
          onFilterClick={() => setFilterDrawerVisible(true)}
        />

        {/* Job Match List */}
        {filteredData.length > 0 ? (
          <JobMatchList data={filteredData} onJobArrowClick={handleJobArrowClick} />
        ) : (
          <div className="px-4 py-8 text-center text-text-tertiary">
            <p>未找到匹配的岗位</p>
          </div>
        )}
      </div>

      {/* Top Filter Drawer */}
      <TopFilterDrawer
        visible={filterDrawerVisible}
        onClose={() => setFilterDrawerVisible(false)}
        onApply={handleFilterApply}
      />

      {/* Job Detail Drawer */}
      <JobDetailDrawer
        visible={jobDetailDrawerVisible}
        jobData={selectedJob}
        company={selectedCompany}
        companyTags={selectedCompanyTags}
        companyId={selectedCompanyId}
        onClose={() => setJobDetailDrawerVisible(false)}
      />
    </div>
  );
};
