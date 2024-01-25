import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { FilmsRepository } from './films.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Film])], 
  controllers: [FilmsController],
  providers: [FilmsService,FilmsRepository],
})
export class FilmsModule {}
