import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchaDto } from './create-matcha.dto';

export class UpdateMatchaDto extends PartialType(CreateMatchaDto) {}
