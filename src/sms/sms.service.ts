import { Injectable } from '@nestjs/common';
import { sendSMS } from './util/vonage';

@Injectable()
export class SmsService {
    async sendSMS(body: { message: string; receiver: string }) {
        sendSMS(body);
        return body;
    }
}
