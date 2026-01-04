import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface FloatingContactProps {
  shouldBlink?: boolean;
}

const FloatingContact = ({ shouldBlink = false }: FloatingContactProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
        </div>
      )}
      
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary hover:bg-primary/90 shadow-xl rounded-full w-14 h-14 p-0 transition-all ${
          shouldBlink ? 'animate-pulse ring-4 ring-primary/50' : ''
        }`}
      >
        <Icon name={isOpen ? "X" : "MessageCircle"} size={24} />
      </Button>
    </div>
  );
};

export default FloatingContact;