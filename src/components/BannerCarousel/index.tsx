import { useState, useEffect } from 'react';
import { Banner } from '../../types';

interface BannerCarouselProps {
  banners: Banner[];
}

export const BannerCarousel = ({ banners }: BannerCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const startX = e.touches[0].clientX;
    const handleTouchEnd = (endEvent: TouchEvent) => {
      const endX = endEvent.changedTouches[0].clientX;
      if (startX - endX > 50) {
        setCurrent((prev) => (prev + 1) % banners.length);
      } else if (endX - startX > 50) {
        setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
      }
    };
    document.addEventListener('touchend', handleTouchEnd, { once: true });
  };

  return (
    <div className="px-4 py-3">
      <div
        className="relative w-full bg-gray-200 rounded-lg overflow-hidden"
        style={{ height: '134px' }}
        onTouchStart={handleTouchStart}
      >
        {/* Banner Images */}
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <img
              key={banner.id}
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
