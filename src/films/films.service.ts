import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.filmsRepository.findBy({ isDeleted: false });
  }

  async findOne(id: number) {
    try {
      const film = await this.filmsRepository.findOneOrFail({
        where: { id: id, isDeleted: false },
      });
      return film;
    } catch (error) {
      throw new NotFoundException('Film not found or deleted');
    }
  }

  async updateLength(id: number, updateFilmLengthDto: UpdateFilmLengthDto) {
    const film = await this.findOne(id);
    if (film) {
      film.length = updateFilmLengthDto.length;
    }
    let updatedFilm = await this.filmsRepository.save(film);
    return updatedFilm;
  }

  async remove(id: number) {
    const film = await this.findOne(id);
    if (film) {
      film.deletedAt = new Date();
      film.isDeleted = true;
    }
    let deletedFilm = await this.filmsRepository.save(film);
    return deletedFilm;
  }
}
