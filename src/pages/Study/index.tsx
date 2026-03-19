import { useLocation } from 'react-router-dom';
import { BannerCarousel } from '../../components/BannerCarousel';
import { KingKongGrid } from '../../components/KingKongGrid';
import { CourseSection } from '../../components/CourseSection';
import { BottomTabBar } from '../../components/BottomTabBar';
import { banners, courses, courseCategories } from '../../mock/data';

export const Study = () => {
  const location = useLocation();
  const defaultTab = location.state?.tab;

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1 max-w-sm mx-auto w-full">
        {/* Banner Carousel */}
        <BannerCarousel banners={banners} />

        {/* King Kong Grid */}
        <KingKongGrid />

        {/* Course Section */}
        <CourseSection categories={courseCategories} courses={courses} defaultTab={defaultTab} />
      </div>

      {/* Bottom Tab Bar */}
      <div className="max-w-sm mx-auto w-full">
        <BottomTabBar />
      </div>
    </div>
  );
};
