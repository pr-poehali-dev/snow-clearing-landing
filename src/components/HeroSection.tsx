import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-montserrat font-black mb-3 sm:mb-4 leading-tight tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent px-2">
          Быстрый Спуск к Решению Вашей Проблемы!
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-semibold mb-2 sm:mb-3 px-2">
          Очистка крыш от снега и наледи в Москве и Ближнем Подмосковье
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-4">
          <a href="https://t.me/dulfer161" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
          </a>
          <a href="tel:+79339277797" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </a>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-primary font-bold mt-3 sm:mt-4 px-2">
          Безопасность и Порядок на Вашей Кровле – Наша Профессия!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;