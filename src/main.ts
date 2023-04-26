import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  await app.listen(3000);

  logger.log(`Aplicação sendo ouvida na porta ${PORT}`);
}
bootstrap();
