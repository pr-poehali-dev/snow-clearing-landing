import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

interface FloatingContactProps {
  shouldBlink?: boolean;
}

const FloatingContact = ({ shouldBlink = false }: FloatingContactProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaxReady, setIsMaxReady] = useState(false);

  useEffect(() => {
    const checkMaxWidget = () => {
      if (window.Marquiz && typeof window.Marquiz.showModal === 'function') {
        setIsMaxReady(true);
        return true;
      }
      return false;
    };

    if (checkMaxWidget()) return;

    const interval = setInterval(() => {
      if (checkMaxWidget()) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const trackTelegram = () => {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'telegram_click');
    }
  };

  const trackPhone = () => {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'phone_click');
    }
  };

  const trackWhatsApp = () => {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'whatsapp_click');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
      {isOpen && (
        <div className="animate-scale-in flex flex-col gap-2">
          <a href="https://t.me/Dulfer8" target="_blank" rel="noopener noreferrer" onClick={trackTelegram}>
            <Button 
              size="default"
              className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white shadow-lg w-full text-sm sm:text-base h-10 sm:h-11"
            >
              <Icon name="Send" size={16} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
              Telegram
            </Button>
          </a>
          <a href="tel:+79094355525" onClick={trackPhone}>
            <Button 
              size="default"
              className="bg-primary hover:bg-primary/90 shadow-lg w-full text-sm sm:text-base h-10 sm:h-11"
            >
              <Icon name="Phone" size={16} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
              Позвонить
            </Button>
          </a>
          <a href="https://wa.me/79094355525" target="_blank" rel="noopener noreferrer" onClick={trackWhatsApp}>
            <Button 
              size="default"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg w-full text-sm sm:text-base h-10 sm:h-11"
            >
              <Icon name="MessageCircle" size={16} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      )}
      
      <Button
        size="default"
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary hover:bg-primary/90 shadow-xl rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 ${
          shouldBlink ? 'animate-call-attention' : 'transition-all'
        }`}
        style={shouldBlink ? {
          filter: 'brightness(1.3) drop-shadow(0 0 20px rgba(251, 146, 60, 0.8))'
        } : undefined}
      >
        <Icon name={isOpen ? "X" : "MessageCircle"} size={20} className="sm:w-6 sm:h-6" />
      </Button>
    </div>
  );
};

export default FloatingContact;