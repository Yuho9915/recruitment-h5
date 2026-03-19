import { useState } from 'react';

interface CompanyGalleryProps {
  images: string[];
}

export const CompanyGallery = ({ images }: CompanyGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    const startX = e.touches[0].clientX;
    const handleTouchEnd = (endEvent: TouchEvent) => {
      const endX = endEvent.changedTouches[0].clientX;
      if (startX - endX > 50) {
        setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
      } else if (endX - startX > 50) {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    document.addEventListener('touchend', handleTouchEnd, { once: true });
  };

  const handleImageClick = () => {
    setFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setFullscreen(false);
  };

  return (
    <>
      {/* Gallery */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '240px' }}
        onTouchStart={handleTouchStart}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Company ${index + 1}`}
              className="w-full h-60 object-cover flex-shrink-0 cursor-pointer"
              onClick={handleImageClick}
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen View */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black z-50"
          onClick={handleCloseFullscreen}
        >
          <div
            className="relative w-full h-full"
            onTouchStart={handleTouchStart}
          >
            <div
              className="flex h-full transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Company ${index + 1}`}
                  className="w-full h-full object-contain flex-shrink-0"
                />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseFullscreen}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white text-2xl"
            >
              ×
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
