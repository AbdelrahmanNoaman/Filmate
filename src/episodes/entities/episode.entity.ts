import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
//We still need to add categories , actors , directors , languages , production companies , photos
@Entity('episodes')
export class Episode {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ required: false })
  @Column({
    type: 'date',
    nullable: true,
  })
  dateOfRelease?: Date;

  @ApiProperty({ required: false })
  @Column({
    type: 'float4',
    nullable: true,
  })
  length?: number;

  @ApiProperty({ required: false })
  @Column({
    type: 'int',
    nullable: true,
  })
  seasonNumber?: number;

  @ApiProperty({ required: false })
  @Column({
    type: 'int',
    nullable: true,
  })
  episodeNumber?: number;

  @ApiProperty({ required: false })
  @Column({
    type: 'float4',
    nullable: true,
  })
  rating?: number;

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
