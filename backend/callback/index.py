import json
from datetime import datetime
import os
import urllib.request
import urllib.parse
import base64

def handler(event: dict, context) -> dict:
    """API для обработки заявок обратного звонка с отправкой в Telegram"""
    
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
        description = body.get('description', '').strip()
        file_data = body.get('file', '')
        file_name = body.get('fileName', '')
        
        if not name or not phone or not description:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя, телефон и описание задачи обязательны'}),
                'isBase64Encoded': False
            }
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Telegram не настроен. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в секреты'}),
                'isBase64Encoded': False
            }
        
        telegram_message = f"""📋 Новая заявка с сайта Дюльфер.рф

👤 Имя: {name}
📱 Телефон: {phone}

📝 Описание задачи:
{description}

🕒 Дата: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}"""
        
        telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        
        params = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': telegram_message
        }).encode('utf-8')
        
        req = urllib.request.Request(telegram_url, data=params)
        with urllib.request.urlopen(req, timeout=10) as response:
            result = response.read().decode('utf-8')
            result_data = json.loads(result)
            
            if not result_data.get('ok'):
                return {
                    'statusCode': 500,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': f'Ошибка Telegram: {result_data.get("description")}'}),
                    'isBase64Encoded': False
                }
        
        if file_data and file_name:
            try:
                file_bytes = base64.b64decode(file_data)
                
                boundary = '----WebKitFormBoundary' + os.urandom(16).hex()
                body_parts = []
                
                body_parts.append(f'--{boundary}'.encode())
                body_parts.append(f'Content-Disposition: form-data; name="chat_id"'.encode())
                body_parts.append(b'')
                body_parts.append(chat_id.encode())
                
                body_parts.append(f'--{boundary}'.encode())
                body_parts.append(f'Content-Disposition: form-data; name="document"; filename="{file_name}"'.encode())
                body_parts.append(b'Content-Type: application/octet-stream')
                body_parts.append(b'')
                body_parts.append(file_bytes)
                
                body_parts.append(f'--{boundary}--'.encode())
                
                multipart_body = b'\r\n'.join(body_parts)
                
                doc_url = f'https://api.telegram.org/bot{bot_token}/sendDocument'
                doc_req = urllib.request.Request(
                    doc_url,
                    data=multipart_body,
                    headers={'Content-Type': f'multipart/form-data; boundary={boundary}'}
                )
                
                with urllib.request.urlopen(doc_req, timeout=15) as doc_response:
                    doc_result = doc_response.read().decode('utf-8')
                    doc_data = json.loads(doc_result)
                    
                    if not doc_data.get('ok'):
                        print(f'Ошибка отправки файла: {doc_data.get("description")}')
            except Exception as e:
                print(f'Ошибка обработки файла: {str(e)}')
        
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