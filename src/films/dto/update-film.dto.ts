import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
export class UpdateFilmLengthDto {
  @ApiProperty()
  @IsNotEmpty()
  @Max(10)
  @IsNumber()
  @Min(0)
  length: number;
}
