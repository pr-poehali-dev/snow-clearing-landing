import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import FloatingContact from '@/components/FloatingContact';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed right-4 top-0 z-30 hidden xl:block pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400"
          style={{ 
            height: `calc(100vh - 120px)`,
            boxShadow: '0 0 8px rgba(0,0,0,0.3)'
          }}
        ></div>
        <div 
          className="relative"
          style={{ 
            transform: `translateY(${Math.min(scrollProgress * 5, 80)}vh)`,
            opacity: scrollProgress < 85 ? 1 : 0,
            transition: 'transform 0.3s ease-out, opacity 0.5s',
            marginTop: '20px'
          }}
        >
          <div className="text-5xl animate-swing" style={{ animationDuration: '4s' }}>
            🧗‍♂️
          </div>
        </div>
      </div>
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="https://cdn.poehali.dev/files/IMG_20260104_233309_679.jpg" alt="Дюльфер.рф" className="h-10 w-auto" />
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

      <section className="pt-20 pb-8 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-montserrat font-black mb-4 leading-tight tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Быстрый Спуск к Решению Вашей Проблемы!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold mb-3">
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
          <p className="text-base sm:text-lg text-primary font-bold mt-4">
            Безопасность и Порядок на Вашей Кровле – Наша Профессия!
          </p>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Почему Выбирают Нас?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Не дайте снегу и сосулькам создать проблемы! Компания Дюльфер РФ предлагает профессиональные услуги по очистке кровель и удалению наледи методом промышленного альпинизма. Мы гарантируем безопасность, оперативность и сохранность вашего имущества.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">объектов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260104_215608_749.jpg"
                alt="Промышленные альпинисты за работой"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold mb-1">Оперативный</div>
                <div className="text-3xl font-bold">Выезд</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Не откладывайте важные работы на потом 📉 Доверьте их профессионалам промышленного альпинизма уже сегодня! ✔️💯</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: 'Snowflake',
                title: 'Комплексная Очистка Кровель от Снега',
                features: [
                  'Удаление снежных масс: Полная или частичная очистка крыш любой конфигурации и площади',
                  'Предотвращение критической нагрузки: Своевременное снижение давления снега на кровлю, предотвращение деформаций и протечек'
                ],
                price: 'от 55 ₽/м²'
              },
              {
                icon: 'Droplets',
                title: 'Удаление Сосулек и Наледи (Периметр)',
                features: [
                  'Безопасное сбивание сосулек: Аккуратное удаление ледяных образований с карнизов, парапетов и водостоков',
                  'Очистка водосточных систем: Восстановление проходимости желобов и труб для правильного отвода талой воды',
                  'Работа на высоте: Промышленные альпинисты обеспечат доступ к самым сложным и опасным участкам'
                ],
                price: 'от 200 ₽/м²'
              }
            ].map((service, index) => (
              <Card key={index} className="hover-scale hover:border-primary/50 transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши Преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: 'Shield', title: 'Безопасность', desc: 'Сертифицированное оборудование и допуски' },
              { icon: 'Clock', title: 'Оперативность', desc: 'Выезд в день обращения' },
              { icon: 'BadgeCheck', title: 'Гарантия', desc: 'Качество работ документально' },
              { icon: 'Wallet', title: 'Прозрачность', desc: 'Фиксированная стоимость без скрытых платежей' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover-scale bg-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260104_215609_164.jpg"
                alt="Профессиональная очистка крыш"
                className="rounded-2xl shadow-xl hover-scale"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Безопасность превыше всего</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Мы используем только сертифицированное альпинистское оборудование и строго соблюдаем технику безопасности
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Award', text: 'Лицензия на высотные работы' },
                  { icon: 'UserCheck', text: 'Аттестованные специалисты' },
                  { icon: 'FileCheck', text: 'Договор и гарантия на все работы' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg hover-scale">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-secondary" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">География Работы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Москва и Ближнее Подмосковье (10 км от МКАД)</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Вся Москва</h3>
                  <p className="text-muted-foreground">Работаем во всех районах столицы</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Car" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">10 км от МКАД</h3>
                  <p className="text-muted-foreground">Ближнее Подмосковье</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Быстрый выезд</h3>
                  <p className="text-muted-foreground">В течение 2-3 часов при срочности</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Часто Задаваемые Вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на популярные вопросы наших клиентов</p>
          <div className="space-y-4">
            {[
              {
                question: 'Как быстро вы можете выехать на объект?',
                answer: 'Мы работаем оперативно — в большинстве случаев выезжаем в день обращения. При срочной необходимости возможен выезд в течение 2-3 часов.'
              },
              {
                question: 'Какая стоимость ваших услуг?',
                answer: 'Стоимость зависит от площади кровли, степени наледи и высоты здания. Очистка от снега — от 55 ₽/м², удаление сосулек и наледи — от 200 ₽/м². Точную цену назовем после осмотра объекта.'
              },
              {
                question: 'Есть ли у вас документы и сертификаты?',
                answer: 'Да, все наши специалисты имеют допуски к высотным работам, используем сертифицированное оборудование. Предоставляем полный пакет документов и работаем по договору с гарантией.'
              },
              {
                question: 'В каких районах вы работаете?',
                answer: 'Мы работаем по всей Москве и Ближнем Подмосковье (в радиусе 10 км от МКАД). Выезжаем на любые объекты в зоне обслуживания.'
              },
              {
                question: 'Что входит в стоимость услуги?',
                answer: 'В стоимость входит: выезд специалиста, очистка кровли, удаление наледи, вывоз снега (при необходимости), страхование работ. Никаких скрытых платежей.'
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="HelpCircle" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Реальные истории наших клиентов</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Михаил Соколов',
                company: 'ООО "СтройИнвест"',
                rating: 5,
                text: 'Быстро и качественно почистили крышу нашего торгового центра. Команда работала профессионально, все документы оформили на месте. Рекомендую!',
                date: '15.01.2026'
              },
              {
                name: 'Елена Воронова',
                company: 'ТСЖ "Солнечный"',
                rating: 5,
                text: 'Обратились после того как управляющая компания не справилась. Ребята приехали в течение часа, все сделали аккуратно, убрали территорию. Цена адекватная.',
                date: '10.01.2026'
              },
              {
                name: 'Дмитрий Петров',
                company: 'Частный дом',
                rating: 5,
                text: 'Второй год подряд заказываю чистку крыши у этих специалистов. Всё быстро, безопасно, без повреждений кровли. Профессионалы своего дела!',
                date: '08.01.2026'
              }
            ].map((review, index) => (
              <Card key={index} className="hover-scale hover:border-primary/30 transition-all bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                    <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Оставьте заявку</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Мы свяжемся с вами в течение 15 минут и ответим на все вопросы
          </p>
          
          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-lg mb-4">Выберите удобный способ связи:</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="https://t.me/dulfer161" target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-20">
                      <Icon name="Send" size={24} className="mr-3" />
                      <div className="text-left">
                        <div className="font-bold">Telegram</div>
                        <div className="text-sm opacity-90">@dulfer161</div>
                      </div>
                    </Button>
                  </a>
                  
                  <a href="tel:+79339277797" className="block">
                    <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 text-lg h-20">
                      <Icon name="Phone" size={24} className="mr-3" />
                      <div className="text-left">
                        <div className="font-bold">Позвонить</div>
                        <div className="text-sm">+7 (933) 927-77-97</div>
                      </div>
                    </Button>
                  </a>
                </div>
                
                <div className="text-center pt-4">
                  <p className="text-muted-foreground">Также доступна связь через MAX</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Send" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Telegram</div>
                      <a href="https://t.me/dulfer161" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition">@dulfer161</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:dulfer161@yandex.ru" className="font-bold hover:text-secondary transition">dulfer161@yandex.ru</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Globe" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Сайт</div>
                      <a href="https://дюльфер.рф" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition">дюльфер.рф</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2026 Дюльфер.рф — Профессиональная чистка крыш в Москве и МО</p>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
};

export default Index;