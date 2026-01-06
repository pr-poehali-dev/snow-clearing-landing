import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'theme_toggle');
    }
  };

  const trackPhoneClick = () => {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'phone_header_click');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border opacity-0 animate-[slideInDown_0.6s_ease-out_forwards]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src="https://cdn.poehali.dev/files/Оранжевый (1).png" alt="Дюльфер.рф" className="h-10 w-auto" />
          <div className="text-base sm:text-lg font-bold text-primary">Дюльфер.рф</div>
        </a>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="transition-all duration-300 hover:scale-110"
            aria-label="Переключить тему"
          >
            <div className="relative w-5 h-5">
              <Icon 
                name="Moon" 
                size={20} 
                className={`absolute inset-0 transition-all duration-500 ${
                  theme === 'light' 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
              <Icon 
                name="Sun" 
                size={20} 
                className={`absolute inset-0 transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 rotate-90 scale-0'
                }`}
              />
            </div>
          </Button>

          <a href="tel:+79339277797" className="md:hidden" onClick={trackPhoneClick}>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} />
            </Button>
          </a>
          <a href="tel:+79339277797" className="hidden md:block" onClick={trackPhoneClick}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (933) 927-77-97
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;