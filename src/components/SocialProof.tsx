import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const SocialProof = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Генерируем случайное число заказов от 8 до 15
    const todayOrders = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
    
    // Анимация счетчика
    let current = 0;
    const increment = Math.ceil(todayOrders / 30);
    const interval = setInterval(() => {
      current += increment;
      if (current >= todayOrders) {
        setCount(todayOrders);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 50);

    // Показываем через 3 секунды после загрузки
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 animate-fade-in"
      style={{ animationDelay: '0.5s' }}
    >
      <div className="bg-card border-2 border-primary/30 rounded-lg shadow-xl p-3 sm:p-4 max-w-[200px] hover:scale-105 transition-transform">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
            <Icon name="Users" size={20} className="text-primary" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-primary">
              {count}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
              человек заказали сегодня
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
          <Icon name="TrendingUp" size={12} className="text-primary" />
          <span>Высокий спрос</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;