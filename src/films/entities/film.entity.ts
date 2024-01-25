import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//We still need to add categories , actors , directors , languages , production companies , photos
@Entity('films')
export class Film {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ required: false })
  @Column({
    type: 'date',
  })
  dateOfRelease?: Date;

  @ApiProperty()
  @Column({
    type: 'float4',
  })
  length: number;

  @ApiProperty({ required: false })
  @Column({
    type: 'float4',
  })
  rating?: number;

  @ApiProperty()
  @Column()
  summary: string;

  @ApiProperty({ required: false })
  @Column()
  poster?: string;

  @ApiProperty()
  @Column()
  countryOfOrigin: string;

  @ApiProperty({ required: false })
  @Column({
    type: 'float',
  })
  budget?: number;

  @ApiProperty({ required: false })
  @Column({
    type: 'float',
  })
  grossWorldwide?: number;
}
