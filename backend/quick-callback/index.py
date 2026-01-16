import json
import smtplib
from email.mime.text import MIMEText
from datetime import datetime
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Быстрая заявка - отправка уведомления на почту и в Telegram"""
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_str = event.get('body', '{}')
        if not body_str:
            body_str = '{}'
        
        body = json.loads(body_str)
        phone = body.get('phone', '').strip()
        
        if not phone:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Телефон обязателен'}),
                'isBase64Encoded': False
            }
        
        email_to = os.environ.get('EMAIL_TO', 'dulfer161@yandex.ru')
        email_from = os.environ.get('EMAIL_FROM', 'dulfer161@yandex.ru')
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', 'dulfer161@yandex.ru')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        
        if not smtp_password:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'SMTP пароль не настроен'}),
                'isBase64Encoded': False
            }
        
        msg = MIMEText(f"""
🚀 БЫСТРАЯ ЗАЯВКА с сайта Дюльфер.рф

📱 Телефон: {phone}

Дата: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}

---
Заявка с сайта дюльфер.рф (быстрая форма)
        """, 'plain', 'utf-8')
        
        msg['From'] = email_from
        msg['To'] = email_to
        msg['Subject'] = f'🚀 Быстрая заявка с сайта Дюльфер.рф'
        
        email_sent = False
        telegram_sent = False
        errors = []
        
        try:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
            email_sent = True
        except Exception as e:
            errors.append(f'Email: {str(e)}')
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
        
        if bot_token and chat_id:
            try:
                telegram_message = f"🚀 Быстрая заявка с сайта Дюльфер.рф\n\n📱 Телефон: {phone}"
                
                telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
                
                params = urllib.parse.urlencode({
                    'chat_id': chat_id,
                    'text': telegram_message
                }).encode('utf-8')
                
                req = urllib.request.Request(telegram_url, data=params)
                with urllib.request.urlopen(req, timeout=10) as response:
                    result = response.read().decode('utf-8')
                    result_data = json.loads(result)
                    
                    if result_data.get('ok'):
                        telegram_sent = True
                    else:
                        errors.append(f'Telegram: {result_data.get("description")}')
            except Exception as e:
                errors.append(f'Telegram: {str(e)}')
        
        if email_sent or telegram_sent:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': True, 
                    'message': 'Заявка отправлена',
                    'email_sent': email_sent,
                    'telegram_sent': telegram_sent
                }),
                'isBase64Encoded': False
            }
        else:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': f'Не удалось отправить: {", ".join(errors)}'}),
                'isBase64Encoded': False
            }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'}),
            'isBase64Encoded': False
        }