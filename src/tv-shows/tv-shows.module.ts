import { Module } from '@nestjs/common';
import { TvShowsService } from './tv-shows.service';
import { TvShowsController } from './tv-shows.controller';
import { TvShow } from './entities/tv-show.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TvShow])],
  controllers: [TvShowsController],
  providers: [TvShowsService],
})
export class TvShowsModule {}
