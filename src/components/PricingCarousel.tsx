import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CarouselImage {
  src: string;
  alt: string;
}

interface PricingCarouselProps {
  images: CarouselImage[];
  className?: string;
}

export default function PricingCarousel({ images, className = '' }: PricingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img 
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-64 lg:h-80 object-cover transition-all duration-500"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Icon name="ChevronLeft" size={16} />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Icon name="ChevronRight" size={16} />
            </Button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex space-x-2 mt-4 justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-eco-green' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}