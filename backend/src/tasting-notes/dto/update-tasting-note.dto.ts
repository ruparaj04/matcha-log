import { PartialType } from '@nestjs/mapped-types';
import { CreateTastingNoteDto } from './create-tasting-note.dto';

export class UpdateTastingNoteDto extends PartialType(CreateTastingNoteDto) {}
