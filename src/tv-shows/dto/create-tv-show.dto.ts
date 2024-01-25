import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateTvShowDto {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(1)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  summary: string;

  @ApiProperty()
  @IsNotEmpty()
  countryOfOrigin: string;
}
