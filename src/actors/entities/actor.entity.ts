import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('actors')
export class Actor {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({
    type: 'date',
  })
  dateOfBirth: Date;

  @ApiProperty({required:false})
  @Column({
    type: 'float4',
  })
  height?: number;

  @ApiProperty({required:false})
  @Column()
  picture?: string;

  @ApiProperty()
  @Column()
  summary: string;

  @ApiProperty()
  @Column()
  countryOfOrigin: string;
}
