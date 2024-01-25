import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//We still need to add categories , actors , directors , languages , production companies , photos
//We won't need an isolated entity for seasons as we will include the season number in the episodes
//so we can get any needed data about the season from the episodes uploaded in that season
//so episodes will have episode length , season number and its own details
//posters will have here a single entity as each season has its own poster
@Entity('tvshows')
export class TvShow {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  nickname?: string;

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
  countryOfOrigin?: string;

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
