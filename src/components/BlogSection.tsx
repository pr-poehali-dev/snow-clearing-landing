import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BlogSection = () => {
  const articles = [
    {
      icon: 'AlertTriangle',
      iconColor: 'text-destructive',
      title: 'Почему опасен снег на крыше?',
      description: 'Снеговая нагрузка может достигать 200 кг/м². Это приводит к деформации кровли, протечкам и даже обрушению конструкций. Своевременная очистка — ваша безопасность.',
      readTime: '3 мин'
    },
    {
      icon: 'Shield',
      iconColor: 'text-primary',
      title: 'Как выбрать альпинистов?',
      description: 'Проверяйте наличие лицензий, сертификатов и страховки. Опытная команда использует профессиональное снаряжение и соблюдает технику безопасности.',
      readTime: '4 мин'
    },
    {
      icon: 'Calculator',
      iconColor: 'text-secondary',
      title: 'От чего зависит цена?',
      description: 'Стоимость работ зависит от площади кровли, высоты здания, степени обледенения и срочности выезда. Минимальный заказ — от 55₽/м².',
      readTime: '2 мин'
    },
    {
      icon: 'Clock',
      iconColor: 'text-accent',
      title: 'Когда чистить крышу?',
      description: 'Оптимальное время — сразу после снегопада или при толщине снега более 30 см. В оттепель усиливается риск образования сосулек и наледи.',
      readTime: '3 мин'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Полезная Информация
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            Всё, что нужно знать об очистке крыш и безопасности
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer bg-card overflow-hidden"
              style={{
                animation: `scaleIn 0.6s ease-out ${0.1 + index * 0.1}s both`
              }}
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-${article.iconColor.replace('text-', '')}/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon 
                      name={article.icon} 
                      size={24} 
                      className={`${article.iconColor} sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:animate-pulse`} 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 whitespace-nowrap ml-2">
                        <Icon name="Clock" size={14} className="flex-shrink-0" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Читать подробнее
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className="ml-1 group-hover:translate-x-1 transition-transform" 
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
