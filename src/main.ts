import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './modules/main/app.module';
import setSwagger from './swagger/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setSwagger(app);
  app.use(helmet());
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
