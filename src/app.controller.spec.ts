/* eslint-disable @typescript-eslint/no-unsafe-call */
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import * as request from 'supertest';

describe('AppController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('root', () => {
    it('should return "Pong"', () => {
      const req = request(app.getHttpServer()).get('/api/ping');
      return req.expect(200).expect('Pong');
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
