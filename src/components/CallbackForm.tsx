import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const CallbackForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    
    if (cleaned.length === 0) return '';
    
    let formatted = '+7';
    if (cleaned.length > 1) {
      formatted += ' (' + cleaned.substring(1, 4);
    }
    if (cleaned.length >= 5) {
      formatted += ') ' + cleaned.substring(4, 7);
    }
    if (cleaned.length >= 8) {
      formatted += '-' + cleaned.substring(7, 9);
    }
    if (cleaned.length >= 10) {
      formatted += '-' + cleaned.substring(9, 11);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value);
    setPhone(formatted);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('Файл слишком большой. Максимум 10 МБ');
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      let fileBase64 = '';
      let fileName = '';
      
      if (file) {
        const reader = new FileReader();
        fileBase64 = await new Promise((resolve, reject) => {
          reader.onload = () => {
            const base64 = reader.result as string;
            resolve(base64.split(',')[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        fileName = file.name;
      }

      const response = await fetch('https://functions.poehali.dev/d4670e0e-716b-4c9a-af72-55519503af63', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          phone,
          description,
          file: fileBase64,
          fileName
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setPhone('');
        setDescription('');
        setFile(null);
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
          onChange={handlePhoneChange}
          required
          className="h-12 text-lg"
          maxLength={18}
        />
      </div>

      <div>
        <Textarea
          placeholder="Опишите задачу: что нужно очистить, площадь, высота здания, особые условия..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="min-h-32 text-lg resize-none"
        />
      </div>

      <div>
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:border-primary transition-colors">
          <Icon name="Upload" size={32} className="text-muted-foreground mb-2" />
          <span className="text-sm text-muted-foreground text-center">
            {file ? file.name : 'Прикрепить фото объекта (необязательно)'}
          </span>
          <span className="text-xs text-muted-foreground mt-1">Максимум 10 МБ</span>
          <input
            type="file"
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {file && (
          <div className="flex items-center justify-between mt-2 p-2 bg-card rounded">
            <span className="text-sm truncate">{file.name}</span>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => setFile(null)}
              className="ml-2"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        )}
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
