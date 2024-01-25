import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmsRepository } from './films.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private filmsRepository: Repository<Film>,
  ) {}
  async create(createFilmDto: CreateFilmDto) {
    const film = this.filmsRepository.create(createFilmDto);
    return await this.filmsRepository.save(film);
  }
/*
  findAll() {
    return this.filmsRepository.findAll();
  }

  findOne(id: number) {
    return this.filmsRepository.findOne(id);
  }

  update(id: number, updateFilmDto: UpdateFilmDto) {
    return this.filmsRepository.update(id, updateFilmDto);
  }

  remove(id: number) {
    return this.filmsRepository.remove(id);
  }*/
}
