import { Body, Controller, Post } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
    
    constructor(
        private readonly smsService: SmsService,
    ) {}

    @Post('/send')
    sendMessage(@Body() body: { message: string; receiver: string }) {
        return this.smsService.sendSMS(body);
    }
}
