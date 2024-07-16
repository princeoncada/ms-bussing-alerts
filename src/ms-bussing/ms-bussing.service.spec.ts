import { Test, TestingModule } from '@nestjs/testing';
import { MsBussingService } from './ms-bussing.service';

describe('MsBussingService', () => {
  let service: MsBussingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsBussingService],
    }).compile();

    service = module.get<MsBussingService>(MsBussingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
