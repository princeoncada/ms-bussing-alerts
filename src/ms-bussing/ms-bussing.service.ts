import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sendSMS } from './util/vonage';

@Injectable()
export class MsBussingService {
  constructor(private configService: ConfigService) {}

  async sendTG(req: any) {
    const telegramUrl = this.configService.get<string>('TELEGRAM_API_BOT_URL');
    const botToken = this.configService.get<string>('TELEGRAM_API_BOT_TOKEN');
    const botCommand = this.configService.get<string>(
      'TELEGRAM_API_BOT_COMMAND',
    );
    const chatId = this.configService.get<string>('TELEGRAM_API_BOT_CHAT_ID');

    const telegram = `${telegramUrl}${botToken}${botCommand}?chat_id=${chatId}`;

    const query = '&text=';
    const formattedMessage = req.body.message.replace(/\n/g, '%0A');

    const message = `${telegram}${query}${formattedMessage}`;

    try {
      const response = await fetch(message, { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return 'Message sent';
    } catch (error) {
      console.error('Failed to send message:', error);
      return 'Failed to send message';
    }
  }

  async sendSMS(req: any) {
    const sendTo = req.body.sendTo.replace(/\+/g, '');
    console.log(req.body.message);
    sendSMS(sendTo, req.body.message);
  }
}
