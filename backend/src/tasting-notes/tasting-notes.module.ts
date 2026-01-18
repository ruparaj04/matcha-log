import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TastingNotesController } from './tasting-notes.controller';
import { TastingNotesService } from './tasting-notes.service';
import { TastingNote } from '../entities/tasting-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TastingNote])],
  controllers: [TastingNotesController],
  providers: [TastingNotesService],
})
export class TastingNotesModule {}
