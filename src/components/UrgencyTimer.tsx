import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Устанавливаем таймер до конца текущего дня
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary text-white py-3 px-4 sticky top-0 z-40 shadow-lg animate-fade-in">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2">
          <Icon name="Clock" size={20} className="animate-pulse flex-shrink-0" />
          <span className="text-sm sm:text-base font-bold">
            Скидка 10% действует только сегодня!
          </span>
        </div>
        
        <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
          <span className="text-xs sm:text-sm">До конца акции:</span>
          <div className="flex gap-1 font-mono font-bold">
            <div className="bg-white/30 rounded px-2 py-1 min-w-[2rem] text-center">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white/30 rounded px-2 py-1 min-w-[2rem] text-center">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white/30 rounded px-2 py-1 min-w-[2rem] text-center animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyTimer;
