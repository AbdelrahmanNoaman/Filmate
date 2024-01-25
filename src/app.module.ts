import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ActorsModule } from './actors/actors.module';
import { FilmsModule } from './films/films.module';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [UsersModule, ActorsModule, FilmsModule, TvShowsModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
