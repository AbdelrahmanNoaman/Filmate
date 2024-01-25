import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';
export class UpdateFilmMoneyDto {
  @ApiProperty()
  budget: number;

  @ApiProperty()
  grossWorldwide: number;
}
