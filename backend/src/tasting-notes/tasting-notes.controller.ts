import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, UsePipes } from '@nestjs/common';
import { TastingNotesService } from './tasting-notes.service';
import { CreateTastingNoteDto } from './dto/create-tasting-note.dto';
import { UpdateTastingNoteDto } from './dto/update-tasting-note.dto';
import { ValidationGuard } from '../guards/validation.guard';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('tasting-notes')
@UseGuards(ValidationGuard)
export class TastingNotesController {
  constructor(private readonly tastingNotesService: TastingNotesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createTastingNoteDto: CreateTastingNoteDto) {
    return this.tastingNotesService.create(createTastingNoteDto);
  }

  @Get()
  findAll() {
    return this.tastingNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tastingNotesService.findOne(+id);
  }

  @Get('matcha/:matchaId')
  findByMatcha(@Param('matchaId') matchaId: string) {
    return this.tastingNotesService.findByMatcha(+matchaId);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateTastingNoteDto: UpdateTastingNoteDto) {
    return this.tastingNotesService.update(+id, updateTastingNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tastingNotesService.remove(+id);
  }
}
