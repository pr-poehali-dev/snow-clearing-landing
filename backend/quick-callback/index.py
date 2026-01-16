import json
from datetime import datetime
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Быстрая заявка - отправка уведомления в Telegram"""
    
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
        
        email_sent = False
        telegram_sent = False
        errors = []
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Telegram не настроен. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в секреты'}),
                'isBase64Encoded': False
            }
        
        try:
            telegram_message = f"🚀 Быстрая заявка с сайта Дюльфер.рф\n\n📱 Телефон: {phone}\n\nДата: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}"
            
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
        
        if telegram_sent:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': True, 
                    'message': 'Заявка отправлена в Telegram'
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