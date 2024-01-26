import { ApiProperty } from '@nestjs/swagger';
import { Actor } from 'src/actors/entities/actor.entity';
import { Column, Entity, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToMany } from 'typeorm';
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
    nullable: true,
  })
  dateOfRelease?: Date;

  @ApiProperty({ required: false })
  @Column({
    type: 'float4',
    nullable: true,
  })
  length?: number;

  @ApiProperty()
  @Column()
  summary: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  poster?: string;

  @ApiProperty()
  @Column()
  countryOfOrigin: string;

  @ApiProperty({ required: false })
  @Column({
    type: 'float',
    nullable: true,
  })
  budget?: number;

  @ApiProperty({ required: false })
  @Column({
    type: 'float',
    nullable: true,
  })
  grossWorldwide?: number;

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

  @ManyToMany((type) => Actor, (actor) => actor.films)
  @JoinTable()
  actors: Actor[];
}
