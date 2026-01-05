import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src="https://cdn.poehali.dev/files/Оранжевый (1).png" alt="Дюльфер.рф" className="h-10 w-auto" />
          <div className="text-base sm:text-lg font-bold text-primary">Дюльфер.рф</div>
        </a>
        <a href="tel:+79339277797" className="md:hidden">
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} />
          </Button>
        </a>
        <a href="tel:+79339277797" className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (933) 927-77-97
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;