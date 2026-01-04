import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os

def handler(event: dict, context) -> dict:
    """API для обработки заявок обратного звонка с отправкой на почту"""
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '').strip()
        phone = body.get('phone', '').strip()
        
        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'}),
                'isBase64Encoded': False
            }
        
        email_to = os.environ.get('EMAIL_TO', 'dulfer161@yandex.ru')
        email_from = os.environ.get('EMAIL_FROM', 'noreply@dulfer.rf')
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        
        msg = MIMEMultipart()
        msg['From'] = email_from
        msg['To'] = email_to
        msg['Subject'] = f'Новая заявка с сайта Дюльфер.рф от {name}'
        
        body_text = f"""
Новая заявка на обратный звонок!

Имя: {name}
Телефон: {phone}
Дата: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}

---
Заявка с сайта дюльфер.рф
        """
        
        msg.attach(MIMEText(body_text, 'plain', 'utf-8'))
        
        if smtp_user and smtp_password:
            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
        else:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP не настроен. Обратитесь к администратору.'}),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'}),
            'isBase64Encoded': False
        }
