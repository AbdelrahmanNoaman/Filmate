import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateTvShowCountryOfOriginDTO {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(300)
  @MinLength(1)
  @IsAlpha()
  countryOfOrigin: string;
}
