import { Module } from '@nestjs/common';
import { MsBussingService } from './ms-bussing.service';
import { MsBussingController } from './ms-bussing.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [MsBussingService],
  controllers: [MsBussingController],
})
export class MsBussingModule {}
