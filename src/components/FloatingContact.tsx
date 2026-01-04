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

  const openMaxWidget = () => {
    if (isMaxReady) {
      window.Marquiz.showModal('673d8c9b5c32d90025f0b35e');
    } else {
      alert('Виджет загружается, попробуйте через пару секунд');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="animate-scale-in flex flex-col gap-2">
          <a href="https://t.me/dulfer161" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white shadow-lg w-full"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
          </a>
          <a href="tel:+79339277797">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg w-full"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </a>
          <Button 
            size="lg" 
            onClick={openMaxWidget}
            disabled={!isMaxReady}
            className="bg-secondary hover:bg-secondary/90 shadow-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isMaxReady ? (
              <>
                <Icon name="MessagesSquare" size={20} className="mr-2" />
                MAX
              </>
            ) : (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Загрузка...
              </>
            )}
          </Button>
        </div>
      )}
      
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary hover:bg-primary/90 shadow-xl rounded-full w-14 h-14 p-0 ${
          shouldBlink ? 'animate-call-attention' : 'transition-all'
        }`}
        style={shouldBlink ? {
          filter: 'brightness(1.3) drop-shadow(0 0 20px rgba(251, 146, 60, 0.8))'
        } : undefined}
      >
        <Icon name={isOpen ? "X" : "MessageCircle"} size={24} />
      </Button>
    </div>
  );
};

export default FloatingContact;