import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateFilmDto {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(1)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  dateOfRelease: Date;

  @ApiProperty({ required: false })
  length?: number;

  @ApiProperty({ required: false })
  rating?: number;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  summary: string;

  @ApiProperty({ required: false })
  poster?: string;

  @ApiProperty()
  @IsNotEmpty()
  countryOfOrigin: string;
}
