import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CallbackForm from '@/components/CallbackForm';
import PhotoGallery from '@/components/PhotoGallery';

const ContentSections = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const trackServiceClick = (serviceName: string) => {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'service_view', { service: serviceName });
    }
  };

  const trackScrollToContacts = () => {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'scroll_to_contacts');
    }
  };

  const trackMaxForm = () => {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'max_form_open');
    }
  };

  const openMaxForm = () => {
    trackMaxForm();
    console.log('openMaxForm вызван');
    console.log('window.Marquiz:', window.Marquiz);
    
    if (window.Marquiz) {
      console.log('Marquiz найден, пытаемся открыть');
      if (typeof window.Marquiz.showModal === 'function') {
        console.log('showModal существует');
        window.Marquiz.showModal('673d8c9b5c32d90025f0b35e');
      } else {
        console.error('showModal не является функцией');
        console.log('Доступные методы:', Object.keys(window.Marquiz));
      }
    } else {
      console.error('Marquiz не загружен');
    }
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Почему Выбирают Нас?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                Не дайте снегу и сосулькам создать проблемы! Компания Дюльфер РФ предлагает профессиональные услуги по очистке кровель и удалению наледи методом промышленного альпинизма. Мы гарантируем безопасность, оперативность и сохранность вашего имущества.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="text-center p-3 md:p-4 bg-card rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-card rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">97+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">объектов</div>
                </div>
              </div>
              <a href="#gallery">
                <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Icon name="Images" size={20} className="mr-2" />
                  Все фотографии работ
                </Button>
              </a>
            </div>
            <div className="relative animate-scale-in mt-6 md:mt-0">
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260104_215608_749.jpg"
                alt="Промышленные альпинисты за работой"
                className="rounded-2xl shadow-2xl hover-scale w-full"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-3 md:p-6 rounded-xl shadow-xl">
                <div className="text-lg md:text-2xl font-bold mb-1">Оперативный</div>
                <div className="text-xl md:text-3xl font-bold">Выезд</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 md:py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-4">Не откладывайте важные работы на потом 📉 Доверьте их профессионалам промышленного альпинизма уже сегодня! ✔️💯</p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
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
              <Card key={index} className="hover-scale hover:border-primary/50 transition-all duration-300 bg-card opacity-0 animate-[scaleIn_0.8s_ease-out_forwards]" style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <Icon name={service.icon} size={24} className="text-primary sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
                  <ul className="space-y-2 mb-3 md:mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-muted-foreground flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl sm:text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery />

      <section id="safety" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Наши Преимущества</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
            {[
              { icon: 'Shield', title: 'Безопасность', desc: 'Сертифицированное оборудование и допуски' },
              { icon: 'Clock', title: 'Оперативность', desc: 'Выезд в день обращения' },
              { icon: 'BadgeCheck', title: 'Гарантия', desc: 'Качество работ документально' },
              { icon: 'Wallet', title: 'Прозрачность', desc: 'Фиксированная стоимость без скрытых платежей' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover-scale bg-card">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Icon name={item.icon} size={24} className="text-primary sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/IMG_20260104_215609_164.jpg"
                alt="Профессиональная очистка крыш"
                className="rounded-2xl shadow-xl hover-scale w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Безопасность превыше всего</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8">
                Мы используем только сертифицированное альпинистское оборудование и строго соблюдаем технику безопасности
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  { icon: 'Award', text: 'Лицензия на высотные работы' },
                  { icon: 'UserCheck', text: 'Аттестованные специалисты' },
                  { icon: 'FileCheck', text: 'Договор и гарантия на все работы' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-lg hover-scale">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={20} className="text-secondary md:w-6 md:h-6" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">География Работы</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-4">Москва и Ближнее Подмосковье (10 км от МКАД)</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="text-center hover-scale">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Icon name="MapPin" size={24} className="text-primary sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 md:mb-2">Вся Москва</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Работаем во всех районах столицы</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Icon name="Car" size={24} className="text-primary sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 md:mb-2">10 км от МКАД</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Ближнее Подмосковье</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale sm:col-span-2 md:col-span-1">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Icon name="Clock" size={24} className="text-primary sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 md:mb-2">Быстрый выезд</h3>
                  <p className="text-sm md:text-base text-muted-foreground">В течение 2-3 часов при срочности</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Часто Задаваемые Вопросы</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-4">Ответы на популярные вопросы наших клиентов</p>
          <div className="space-y-3 md:space-y-4">
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
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="HelpCircle" size={18} className="text-primary sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">{faq.question}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 sm:py-16 md:py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-4">Реальные истории наших клиентов</p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                name: 'Андрей Смирнов',
                company: 'ТЦ "Ритейл Парк"',
                rating: 5,
                text: 'Срочно нужно было убрать снег с крыши торгового центра. Приехали быстро, работали слаженно. Всё чисто, никаких повреждений кровли. Спасибо!',
                date: '22.12.2025'
              },
              {
                name: 'Ольга Кузнецова',
                company: 'ЖК "Новые горизонты"',
                rating: 5,
                text: 'Управляющая компания порекомендовала Дюльфер для очистки козырьков от сосулек. Ребята сделали всё быстро и аккуратно, жители довольны. Будем обращаться ещё.',
                date: '18.01.2025'
              },
              {
                name: 'Сергей Волков',
                company: 'ЖК "Алые Паруса", Москва',
                rating: 5,
                text: 'Вызывали для очистки крыши многоэтажки от наледи. Работали профессионально, быстро согласовали все моменты с УК. Жильцы спокойны, опасность устранена. Цена адекватная.',
                date: '05.02.2025'
              }
            ].map((review, index) => (
              <Card key={index} className="hover-scale hover:border-primary/30 transition-all bg-card">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-1 mb-3 md:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 md:mb-4 italic">"{review.text}"</p>
                  <div className="border-t border-border pt-3 md:pt-4">
                    <div className="font-bold text-sm sm:text-base">{review.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{review.company}</div>
                    <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Оставьте заявку</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-4">
            Мы свяжемся с вами в течение 15 минут и ответим на все вопросы
          </p>
          
          <Card className="bg-card">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="text-center mb-4 md:mb-6">
                  <p className="text-base sm:text-lg mb-3 md:mb-4">Выберите удобный способ связи:</p>
                </div>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  <a href="https://t.me/Dulfer8" target="_blank" rel="noopener noreferrer" className="block" onClick={trackTelegram}>
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-base sm:text-lg h-16 sm:h-20">
                      <Icon name="Send" size={20} className="mr-2 sm:mr-3 sm:w-6 sm:h-6" />
                      <div className="text-left">
                        <div className="font-bold">Telegram</div>
                        <div className="text-xs sm:text-sm opacity-90">@Dulfer8</div>
                      </div>
                    </Button>
                  </a>
                  
                  <a href="https://wa.me/79094355525" target="_blank" rel="noopener noreferrer" className="block" onClick={trackWhatsApp}>
                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white text-base sm:text-lg h-16 sm:h-20">
                      <Icon name="MessageCircle" size={20} className="mr-2 sm:mr-3 sm:w-6 sm:h-6" />
                      <div className="text-left">
                        <div className="font-bold">WhatsApp</div>
                        <div className="text-xs sm:text-sm opacity-90">+7 (909) 435-55-25</div>
                      </div>
                    </Button>
                  </a>
                  
                  <a href="tel:+79094355525" className="block" onClick={trackPhone}>
                    <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 text-base sm:text-lg h-16 sm:h-20">
                      <Icon name="Phone" size={20} className="mr-2 sm:mr-3 sm:w-6 sm:h-6" />
                      <div className="text-left">
                        <div className="font-bold">Позвонить</div>
                        <div className="text-xs sm:text-sm">+7 (909) 435-55-25</div>
                      </div>
                    </Button>
                  </a>
                  
                  <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg h-16 sm:h-20" onClick={openMaxForm}>
                    <Icon name="FileText" size={20} className="mr-2 sm:mr-3 sm:w-6 sm:h-6" />
                    <div className="text-left">
                      <div className="font-bold">Заявка Max</div>
                      <div className="text-xs sm:text-sm opacity-90">Быстрая форма</div>
                    </div>
                  </Button>
                </div>
                
                <div className="text-center pt-3 pb-4 sm:pt-4 sm:pb-6 border-b border-border">
                  <p className="text-sm sm:text-base text-muted-foreground">Или оставьте заявку ниже</p>
                </div>

                <CallbackForm />
              </div>
              
              <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Send" size={20} className="text-primary sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Telegram</div>
                      <a href="https://t.me/Dulfer8" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold hover:text-primary transition">@Dulfer8</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-[#25D366] sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">WhatsApp</div>
                      <a href="https://wa.me/79094355525" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold hover:text-[#25D366] transition">+7 909 435-55-25</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-secondary sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Email</div>
                      <a href="mailto:dulfer161@yandex.ru" className="text-sm sm:text-base font-bold hover:text-secondary transition break-all">dulfer161@yandex.ru</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Globe" size={20} className="text-primary sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Сайт</div>
                      <a href="https://дюльфер.рф" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold hover:text-primary transition">дюльфер.рф</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-xs sm:text-sm md:text-base">&copy; 2026 Дюльфер.рф — Профессиональная чистка крыш в Москве и МО</p>
        </div>
      </footer>
    </>
  );
};

export default ContentSections;