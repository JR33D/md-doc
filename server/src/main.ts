import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as path from 'path';

import { AppModule } from './app.module';
import { environment } from '../../environments/environment';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.use(express.static(path.join(__dirname, '../../dist/md-doc')));

   await app.listen(process.env.PORT || 3000);
   console.log('app listening on port ' + (process.env.PORT || 3000));
}
bootstrap();
