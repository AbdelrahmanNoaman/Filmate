import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { Repository } from 'typeorm';
import { UpdateFilmLengthDto } from './dto/update-film.dto';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private filmsRepository: Repository<Film>,
  ) {}
  async create(createFilmDto: CreateFilmDto) {
    const film = this.filmsRepository.create(createFilmDto);
    return await this.filmsRepository.save(film);
  }

  findAll() {
    return this.filmsRepository.findBy({ deletedAt: null });
  }

  async findOne(id: number): Promise<Film> {
    return this.filmsRepository.findOneOrFail({
      where: { id: id, deletedAt: null },
    });
  }

  async updateLength(id: number, updateFilmLengthDto: UpdateFilmLengthDto) {
    const film = await this.findOne(id);
    if (film) {
      film.length = updateFilmLengthDto.length;
      console.log(film);
    }
    let updatedFilm = await this.filmsRepository.save(film);
    return updatedFilm;
  }

  async remove(id: number) {
    const film = await this.findOne(id);
    if (film) {
      film.deletedAt = new Date();
    }
    let deletedFilm = await this.filmsRepository.save(film);
    return deletedFilm;
  }
}
