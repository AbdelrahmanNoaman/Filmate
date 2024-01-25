import { ApiProperty } from '@nestjs/swagger';
import { Film } from 'src/films/entities/film.entity';
import { TvShow } from 'src/tv-shows/entities/tv-show.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @ApiProperty({ required: false })
  @Column({
    type: 'float4',
  })
  height?: number;

  @ApiProperty({ required: false })
  @Column()
  picture?: string;

  @ApiProperty()
  @Column()
  summary: string;

  @ApiProperty()
  @Column()
  countryOfOrigin: string;

  @ManyToMany((type) => Film, (film) => film.actors)
  films: Film[];

  @ManyToMany((type) => TvShow, (tvShow) => tvShow.actors)
  tvShows: TvShow[];
}
