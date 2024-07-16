import { Controller, Post, Req } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { MsBussingService } from './ms-bussing.service';

@Controller('ms-bussing')
export class MsBussingController {
  constructor(private readonly msBussingService: MsBussingService) {}

  @Post('/tg')
  sendMessageToTelegram(@Req() req: FastifyRequest) {
    return this.msBussingService.sendTG(req);
  }

  @Post('/sms')
  sendMessageToSMS(@Req() req: FastifyRequest) {
    return this.msBussingService.sendSMS(req);
  }
}
