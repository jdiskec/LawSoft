import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// En taskapi/taskapi/src/main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // <--- AGREGAR ESTO para permitir que el frontend se conecte
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();