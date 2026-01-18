import { IsNumber, IsString, IsOptional, IsDateString, Min, Max } from 'class-validator';

export class CreateTastingNoteDto {
  @IsNumber()
  matchaId: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  flavorRating: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  aromaRating: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  textureRating: number;

  @IsNumber()
  @Min(1)
  @Max(10)
  overallRating: number;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsDateString()
  tastingDate: string;

  @IsNumber()
  @IsOptional()
  brewingTemperature?: number;

  @IsString()
  @IsOptional()
  brewingMethod?: string;
}
