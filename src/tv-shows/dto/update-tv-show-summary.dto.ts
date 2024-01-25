import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdateTvShowSummaryDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(300)
  @MinLength(1)
  summary: string;
}
