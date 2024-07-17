import { Body, Controller, Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
    constructor(private readonly telegramService: TelegramService) {}
    
    @Post('/send')
    sendMessageToTelegram(@Body() body: { message: string }) {
        return this.telegramService.sendTG(body);
    }
}
