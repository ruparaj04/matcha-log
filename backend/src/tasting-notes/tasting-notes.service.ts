import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TastingNote } from '../entities/tasting-note.entity';
import { CreateTastingNoteDto } from './dto/create-tasting-note.dto';
import { UpdateTastingNoteDto } from './dto/update-tasting-note.dto';

@Injectable()
export class TastingNotesService {
  constructor(
    @InjectRepository(TastingNote)
    private tastingNoteRepository: Repository<TastingNote>,
  ) {}

  async create(createTastingNoteDto: CreateTastingNoteDto): Promise<TastingNote> {
    const tastingNote = this.tastingNoteRepository.create({
      ...createTastingNoteDto,
      tastingDate: new Date(createTastingNoteDto.tastingDate),
    });
    return await this.tastingNoteRepository.save(tastingNote);
  }

  async findAll(): Promise<TastingNote[]> {
    return await this.tastingNoteRepository.find({
      relations: ['matcha'],
    });
  }

  async findOne(id: number): Promise<TastingNote> {
    return await this.tastingNoteRepository.findOne({
      where: { id },
      relations: ['matcha'],
    });
  }

  async findByMatcha(matchaId: number): Promise<TastingNote[]> {
    return await this.tastingNoteRepository.find({
      where: { matchaId },
      relations: ['matcha'],
    });
  }

  async update(id: number, updateTastingNoteDto: UpdateTastingNoteDto): Promise<TastingNote> {
    const updateData: any = { ...updateTastingNoteDto };
    if (updateTastingNoteDto.tastingDate) {
      updateData.tastingDate = new Date(updateTastingNoteDto.tastingDate);
    }
    await this.tastingNoteRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tastingNoteRepository.delete(id);
  }
}
