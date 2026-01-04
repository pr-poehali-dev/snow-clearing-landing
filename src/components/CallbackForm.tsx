import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const CallbackForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://functions.poehali.dev/d4670e0e-716b-4c9a-af72-55519503af63', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setPhone('');
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(data.error || 'Ошибка отправки заявки');
      }
    } catch (err) {
      setError('Ошибка соединения с сервером');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle2" size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
        <p className="text-muted-foreground">
          Мы свяжемся с вами в течение 15 минут
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-lg">Или оставьте свои контакты:</p>
        <p className="text-sm text-muted-foreground mt-1">Мы перезвоним в течение 15 минут</p>
      </div>
      
      <div>
        <Input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-12 text-lg"
        />
      </div>
      
      <div>
        <Input
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="h-12 text-lg"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 h-12 text-lg"
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </>
        )}
      </Button>
    </form>
  );
};

export default CallbackForm;