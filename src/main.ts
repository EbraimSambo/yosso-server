import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true} );
  app.setGlobalPrefix(`api-yosso`)
  await app.listen( 8000);
}
bootstrap();