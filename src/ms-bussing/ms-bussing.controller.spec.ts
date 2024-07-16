import { Test, TestingModule } from '@nestjs/testing';
import { MsBussingController } from './ms-bussing.controller';

describe('MsBussingController', () => {
  let controller: MsBussingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MsBussingController],
    }).compile();

    controller = module.get<MsBussingController>(MsBussingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
