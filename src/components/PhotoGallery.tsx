import { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/IMG_20260104_215608_749.jpg',
      alt: 'Промышленные альпинисты за работой'
    },
    {
      url: 'https://cdn.poehali.dev/files/IMG_20260104_215609_164.jpg',
      alt: 'Профессиональная очистка крыш'
    },
    {
      url: 'https://cdn.poehali.dev/projects/4351694f-9697-402b-a12f-3e13d22f949b/files/099f084d-866f-439c-8b5d-5f63232f08d7.jpg',
      alt: 'Очистка снега с кровли'
    },
    {
      url: 'https://cdn.poehali.dev/projects/4351694f-9697-402b-a12f-3e13d22f949b/files/d54f2507-6b30-4e1e-a41f-72c57b0ab9b4.jpg',
      alt: 'Удаление сосулек'
    },
    {
      url: 'https://cdn.poehali.dev/projects/4351694f-9697-402b-a12f-3e13d22f949b/files/5704450d-ca3c-4f5c-accf-61b0adcb31b1.jpg',
      alt: 'Команда альпинистов на объекте'
    },
    {
      url: 'https://cdn.poehali.dev/projects/4351694f-9697-402b-a12f-3e13d22f949b/files/2d5decfa-33c0-4bce-9134-da7d9ef3ba95.jpg',
      alt: 'Профессиональное снаряжение'
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

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
          Наши Работы
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video">
            <div 
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full h-full flex-shrink-0">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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
    </section>
  );
};

export default PhotoGallery;
