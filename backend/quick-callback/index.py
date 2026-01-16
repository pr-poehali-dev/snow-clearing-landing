import json
import smtplib
from email.mime.text import MIMEText
from datetime import datetime
import os


def handler(event: dict, context) -> dict:
    """Быстрая заявка - отправка уведомления на почту"""
    
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
        
        with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'}),
            'isBase64Encoded': False
        }
