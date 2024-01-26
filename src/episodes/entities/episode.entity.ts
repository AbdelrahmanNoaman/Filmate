import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//We still need to add categories , actors , directors , languages , production companies , photos
@Entity('episodes')
export class Episode {
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
  dateOfRelease: Date;

  @ApiProperty({ required: false })
  @Column({
    type: 'float4',
    nullable: true,
  })
  length?: number;

  @ApiProperty()
  @Column({
    type: 'int',
  })
  seasonNumber: number;

  @ApiProperty()
  @Column({
    type: 'int',
  })
  episodeNumber: number;

  @ApiProperty()
  @Column()
  summary: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  poster?: string;

  @ApiProperty({ required: false })
  @Column({
    type: 'date',
    nullable: true,
  })
  deletedAt?: Date;

  @ApiProperty({ required: false })
  @Column({
    type: 'boolean',
    nullable: true,
    default: false,
  })
  isDeleted?: Boolean;
}
