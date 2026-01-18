import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matcha } from '../entities/matcha.entity';
import { CreateMatchaDto } from './dto/create-matcha.dto';
import { UpdateMatchaDto } from './dto/update-matcha.dto';

@Injectable()
export class MatchaService {
  constructor(
    @InjectRepository(Matcha)
    private matchaRepository: Repository<Matcha>,
  ) {}

  async create(createMatchaDto: CreateMatchaDto): Promise<Matcha> {
    const matcha = this.matchaRepository.create(createMatchaDto);
    return await this.matchaRepository.save(matcha);
  }

  async findAll(): Promise<Matcha[]> {
    return await this.matchaRepository.find({
      relations: ['tastingNotes'],
    });
  }

  async findOne(id: number): Promise<Matcha> {
    return await this.matchaRepository.findOne({
      where: { id },
      relations: ['tastingNotes'],
    });
  }

  async update(id: number, updateMatchaDto: UpdateMatchaDto): Promise<Matcha> {
    await this.matchaRepository.update(id, updateMatchaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.matchaRepository.delete(id);
  }
}
