import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateEpisodeDto {
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

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  seasonNumber: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  episodeNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  summary: string;

  @ApiProperty({ required: false })
  poster?: string;
}
