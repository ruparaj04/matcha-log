import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, UsePipes } from '@nestjs/common';
import { MatchaService } from './matcha.service';
import { CreateMatchaDto } from './dto/create-matcha.dto';
import { UpdateMatchaDto } from './dto/update-matcha.dto';
import { ValidationGuard } from '../guards/validation.guard';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('matcha')
@UseGuards(ValidationGuard)
export class MatchaController {
  constructor(private readonly matchaService: MatchaService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createMatchaDto: CreateMatchaDto) {
    return this.matchaService.create(createMatchaDto);
  }

  @Get()
  findAll() {
    return this.matchaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchaService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateMatchaDto: UpdateMatchaDto) {
    return this.matchaService.update(+id, updateMatchaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchaService.remove(+id);
  }
}
