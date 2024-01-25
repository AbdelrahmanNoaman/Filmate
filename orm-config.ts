import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';
import { User } from 'src/users/entities/user.entity';
import { Film } from 'src/films/entities/film.entity';
import { TvShow } from 'src/tv-shows/entities/tv-show.entity';
import { Actor } from 'src/actors/entities/actor.entity';
import { join } from 'path';
config();

const configuration: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: Boolean(process.env.SYNCHRONIZE),
  entities: [join(process.cwd(), 'dist/**/*.entity.js')],
};
export default configuration;
