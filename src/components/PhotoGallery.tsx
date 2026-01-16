import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/20190105_152826.jpg',
      alt: 'Очистка крыши от снега промышленными альпинистами'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399353.jpg',
      alt: 'Работа на высоте с профессиональным снаряжением'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399356.jpg',
      alt: 'Очистка снега на плоской кровле'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399357.jpg',
      alt: 'Удаление снежных масс лопатой'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399358.jpg',
      alt: 'Ночная работа по очистке козырька от снега'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399359.jpg',
      alt: 'Альпинист в желтой экипировке на склоне крыши'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399360.jpg',
      alt: 'Сброс снега с крыши'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399363.jpg',
      alt: 'Команда альпинистов на красной кровле'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399365.jpg',
      alt: 'Селфи альпиниста на работе'
    },
    {
      url: 'https://cdn.poehali.dev/files/5429472664201399364.jpg',
      alt: 'Работа на скатной крыше'
    },
    {
      url: 'https://cdn.poehali.dev/files/IMG_20260104_215608_749.jpg',
      alt: 'Промышленные альпинисты за работой'
    },
    {
      url: 'https://cdn.poehali.dev/files/IMG_20260104_215609_164.jpg',
      alt: 'Профессиональная очистка крыш'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
          Наши Работы
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video group">
            <div 
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full h-full flex-shrink-0">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={toggleZoom}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Предыдущее фото"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Следующее фото"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-full shadow-lg text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={toggleZoom}
        >
          <button
            className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground p-3 rounded-full shadow-lg transition-all z-10"
            onClick={toggleZoom}
            aria-label="Закрыть"
          >
            <Icon name="X" size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full shadow-lg transition-all"
            aria-label="Предыдущее фото"
          >
            <Icon name="ChevronLeft" size={32} />
          </button>

          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-3 rounded-full shadow-lg transition-all"
            aria-label="Следующее фото"
          >
            <Icon name="ChevronRight" size={32} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-background/90 text-foreground px-5 py-2 rounded-full shadow-lg text-base font-semibold">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;