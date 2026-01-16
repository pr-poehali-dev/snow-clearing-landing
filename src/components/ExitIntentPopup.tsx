import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Проверяем, показывали ли уже попап в этой сессии
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Показываем только если курсор движется к верху страницы (выход)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        
        if (window.ym) {
          window.ym(101026698, 'reachGoal', 'exit_intent_shown');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    
    if (window.ym) {
      window.ym(101026698, 'reachGoal', 'exit_intent_closed');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }

    setIsSubmitting(true);

    try {
      const message = `🎁 СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ — Заявка с Exit Intent\n\n📱 Телефон: ${phone}`;
      
      await fetch(`https://api.telegram.org/bot7700727965:AAFfRzdw7yKs4taCd1qJHAAzh77af4eIBXA/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '-4568518346',
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (window.ym) {
        window.ym(101026698, 'reachGoal', 'exit_intent_submit');
      }

      setIsSuccess(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка. Пожалуйста, позвоните нам напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(4px)'
      }}
      onClick={handleClose}
    >
      <Card 
        className="max-w-lg w-full relative animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-10 h-10 bg-background border-2 border-border rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all shadow-lg z-10"
          aria-label="Закрыть"
        >
          <Icon name="X" size={20} />
        </button>

        <CardContent className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <Icon name="CheckCircle2" size={64} className="text-primary mx-auto mb-4 animate-bounce-subtle" />
              <h3 className="text-2xl font-bold mb-2">Спасибо!</h3>
              <p className="text-muted-foreground">
                Мы получили вашу заявку и свяжемся с вами в ближайшее время
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 animate-pulse-glow">
                  <Icon name="Gift" size={32} className="text-primary animate-bounce-subtle" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Стоп! Не уходите!
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Специальное предложение только для вас
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 sm:p-6 mb-6 border-2 border-primary/30">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Zap" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Скидка 10% при заказе сегодня
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>Бесплатный выезд и оценка</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>Гарантия качества работ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>Работаем без предоплаты</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Оставьте телефон — мы перезвоним за 5 минут
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 text-base"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-base animate-pulse-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Gift" size={20} className="mr-2" />
                      Получить скидку 10%
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Предложение действует только сегодня
                </p>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentPopup;
