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
          <div className="text-2xl font-bold text-primary">Дюльфер.рф</div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="story-link hover:text-primary transition">Услуги</a>
            <a href="#safety" className="story-link hover:text-primary transition">Безопасность</a>
            <a href="#advantages" className="story-link hover:text-primary transition">Преимущества</a>
            <a href="#reviews" className="story-link hover:text-primary transition">Отзывы</a>
            <a href="#contacts" className="story-link hover:text-primary transition">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Чистка снега и наледи с крыш
                <span className="text-primary"> в Москве и МО</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональные промышленные альпинисты с опытом более 10 лет. Работаем быстро, безопасно и качественно.
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
                src="https://cdn.poehali.dev/projects/4351694f-9697-402b-a12f-3e13d22f949b/files/d2da4791-ccdc-43f4-987c-ba819f253283.jpg"
                alt="Промышленный альпинист за работой"
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
          <p className="text-center text-muted-foreground mb-12 text-lg">Полный спектр работ по очистке кровли</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Snowflake',
                title: 'Удаление снега',
                description: 'Профессиональная очистка кровли от снежных масс любой сложности',
                price: 'от 150 ₽/м²'
              },
              {
                icon: 'Droplets',
                title: 'Скол наледи',
                description: 'Безопасное удаление ледяных наростов и сосулек с крыш и козырьков',
                price: 'от 200 ₽/м²'
              },
              {
                icon: 'Shield',
                title: 'Установка снегозадержателей',
                description: 'Монтаж систем безопасности для предотвращения схода снега',
                price: 'от 500 ₽/п.м.'
              }
            ].map((service, index) => (
              <Card key={index} className="hover-scale hover:border-primary/50 transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
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
                src="https://cdn.poehali.dev/projects/4351694f-9697-402b-a12f-3e13d22f949b/files/a37cd9b3-b0cb-4c64-b80d-b6c22fe97914.jpg"
                alt="Профессиональное оборудование"
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
                      <div className="font-bold text-lg">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-bold text-lg">info@дюльфер.рф</div>
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
    </div>
  );
};

export default Index;
