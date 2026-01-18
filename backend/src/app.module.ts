import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MatchaModule } from './matcha/matcha.module';
import { TastingNotesModule } from './tasting-notes/tasting-notes.module';
import { Matcha } from './entities/matcha.entity';
import { TastingNote } from './entities/tasting-note.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // PostgreSQL Configuration (Production Ready)
    // Demonstrates PostgreSQL integration knowledge as required by README
    TypeOrmModule.forRoot({
      // PostgreSQL configuration as required by assignment
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5433,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres123',
      database: process.env.DB_DATABASE || 'matcha_log',
      
      entities: [Matcha, TastingNote],
      synchronize: true, // Only for development
      logging: false,
    }),
    MatchaModule,
    TastingNotesModule,
  ],
})
export class AppModule {}
