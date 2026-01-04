import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary hover:text-primary/80 transition">
            <img src="https://cdn.poehali.dev/files/IMG_20260104_215609_164.jpg" alt="Дюльфер.рф" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="story-link hover:text-primary transition">Услуги</a>
            <a href="#safety" className="story-link hover:text-primary transition">Безопасность</a>
            <a href="#advantages" className="story-link hover:text-primary transition">Преимущества</a>
            <a href="#reviews" className="story-link hover:text-primary transition">Отзывы</a>
            <a href="#contacts" className="story-link hover:text-primary transition">Контакты</a>
          </nav>
          <a href="tel:+79339277797">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (933) 927-77-97
            </Button>
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Очистка Крыш от Снега и Наледи
              </h1>
              <p className="text-2xl text-primary font-semibold mb-4">
                Безопасность и Порядок на Вашей Кровле – Наша Профессия!
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Не дайте снегу и сосулькам создать проблемы! Компания Дюльфер РФ предлагает профессиональные услуги по очистке кровель и удалению наледи методом промышленного альпинизма. Мы гарантируем безопасность, оперативность и сохранность вашего имущества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 hover-scale">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Заказать выезд
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260104_215608_749.jpg"
                alt="Промышленные альпинисты за работой"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm">Работаем круглосуточно</div>
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
                price: 'от 150 ₽/м²'
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260104_215609_164.jpg"
                alt="Профессиональная очистка крыш"
                className="rounded-2xl shadow-xl hover-scale"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Безопасность превыше всего</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы используем только сертифицированное альпинистское оборудование и строго соблюдаем технику безопасности
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Award', text: 'Лицензия на высотные работы' },
                  { icon: 'ShieldCheck', text: 'Страхование ответственности до 5 млн ₽' },
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

      <section id="advantages" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'лет опыта', icon: 'TrendingUp' },
              { number: '500+', label: 'объектов обслужено', icon: 'Building2' },
              { number: '98%', label: 'довольных клиентов', icon: 'ThumbsUp' },
              { number: '24/7', label: 'круглосуточно', icon: 'Clock' }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover-scale hover:border-primary/50 transition-all bg-card">
                <CardContent className="p-8">
                  <Icon name={stat.icon} size={40} className="text-primary mx-auto mb-4" />
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите вашу задачу..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <a href="tel:+79339277797" className="font-bold text-lg hover:text-primary transition">+7 (933) 927-77-97</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:dulfer161@yandex.ru" className="font-bold text-lg hover:text-secondary transition">dulfer161@yandex.ru</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Globe" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Портфолио</div>
                      <a href="https://дюльфер.рф" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-primary transition">дюльфер.рф</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Мы специализируемся на</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              'очистка крыш от снега', 'уборка снега с крыши', 'удаление наледи с крыш',
              'сбить сосульки с крыши', 'чистка кровли от снега', 'уборка снега с кровли',
              'очистка крыш', 'уборка снега', 'очистка кровли от снега и наледи',
              'уборка снега и сосулек с крыш', 'чистка крыши от наледи', 'удаление сосулек',
              'услуги по уборке снега с крыш', 'промышленный альпинизм очистка крыш',
              'очистка крыш альпинистами', 'сбивание сосулек', 'сброс снега с крыши',
              'ручная уборка снега с крыш', 'аварийная очистка крыш от снега'
            ].map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-muted-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2026 Дюльфер.рф — Профессиональная чистка крыш в Москве и МО</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;