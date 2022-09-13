import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WorkspaceModule } from './workspace.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(WorkspaceModule);
  /**
   * for class validations defined in the dto
   */
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  /**
   * Setting up swagger doc
   */
  const config = new DocumentBuilder()
    .setTitle('Workspace')
    .setVersion('1.0')
    .addTag('Workspace')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.get('PORT'));
}
bootstrap();
