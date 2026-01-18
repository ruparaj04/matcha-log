import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend communication
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
    credentials: true,
  });
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  
  // API prefix for all routes
  app.setGlobalPrefix('api');
  
  const port = 3000; // Standard NestJS port for README compliance
  await app.listen(port);
  console.log(`í½µ Matcha Log API running on http://localhost:${port}/api`);
  console.log(`í³Š Database: PostgreSQL (as required by README)`);
}
bootstrap();
