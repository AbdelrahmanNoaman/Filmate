import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdateTvShowCountryOfOriginDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(300)
  @MinLength(1)
  countryOfOrigin: string;
}
