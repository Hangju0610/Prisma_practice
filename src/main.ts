import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Prisma Practices')
    .setDescription('Prisma API 연습용 페이지')
    .setVersion('0.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('Docs', app, swaggerDocument);

  app.enableCors({
    origin: true,
  });
  await app.listen(3000);
}
bootstrap();
