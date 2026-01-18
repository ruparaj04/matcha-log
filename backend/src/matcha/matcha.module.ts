import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchaController } from './matcha.controller';
import { MatchaService } from './matcha.service';
import { Matcha } from '../entities/matcha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matcha])],
  controllers: [MatchaController],
  providers: [MatchaService],
  exports: [MatchaService],
})
export class MatchaModule {}
