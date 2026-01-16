import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const QuickCallbackForm = () => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }

    setIsSubmitting(true);

    try {
      const message = `🚀 Быстрая заявка с сайта Дюльфер.рф\n\n📱 Телефон: ${phone}`;
      
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
        window.ym(101026698, 'reachGoal', 'quick_form_submit');
      }

      setIsSuccess(true);
      setPhone('');
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка. Пожалуйста, позвоните нам напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-primary/10 border border-primary rounded-lg p-4 text-center animate-fade-in">
        <Icon name="CheckCircle2" size={48} className="text-primary mx-auto mb-3" />
        <p className="text-lg font-bold text-primary mb-1">Заявка отправлена!</p>
        <p className="text-sm text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 sm:p-6 border-2 border-primary/20">
      <div className="flex items-center gap-2 mb-3">
        <Icon name="Zap" size={24} className="text-primary" />
        <h3 className="text-lg sm:text-xl font-bold">Быстрая заявка</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Оставьте телефон — перезвоним за 5 минут</p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 h-12 text-base"
          disabled={isSubmitting}
          required
        />
        <Button 
          type="submit" 
          size="lg" 
          className="bg-primary hover:bg-primary/90 h-12 px-6 whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="Phone" size={20} className="mr-2" />
              Перезвоните мне
            </>
          )}
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground mt-3 text-center">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
};

export default QuickCallbackForm;
