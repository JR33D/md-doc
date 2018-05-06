import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from '../../environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('app listening on port 3000');
}
bootstrap();