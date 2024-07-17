import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TelegramService {
    private readonly botToken: string;
    private readonly chatId: string;

    constructor(
        private configService: ConfigService,
    ) {
        // env variables
        this.botToken = this.configService.get<string>('TELEGRAM_API_BOT_TOKEN');
        this.chatId = this.configService.get<string>('TELEGRAM_API_BOT_CHAT_ID');
    }

    // send telegram message
    async sendTG(body: { message: string }) {
        const telegram = `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatId}`;

        // format message and attach to link as a parameter
        const query = '&text=';
        const formattedMessage = body.message.replace(/\n/g, '%0A');
        const message = `${telegram}${query}${formattedMessage}`;

        try {
            const response = await axios.get(message);
            if (response.status !== 200) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return 'Message sent';
        } catch (error) {
            console.error('Failed to send message:', error);
            return 'Failed to send message';
        }
    }
}
