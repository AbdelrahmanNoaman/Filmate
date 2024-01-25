import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { Repository } from 'typeorm';
import { UpdateFilmLengthDto } from './dto/update-film.dto';
import { UpdateFilmMoneyDto } from './dto/update-film-money.dto';

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
    film.length = updateFilmLengthDto.length;
    let updatedFilm = await this.filmsRepository.save(film);
    return updatedFilm;
  }


  async updateMoney(id: number, updateFilmMoneyDto: UpdateFilmMoneyDto) {
    const film = await this.findOne(id);
    this.verifyFilmMoneyData(updateFilmMoneyDto, film);
    let updatedFilm = await this.filmsRepository.save(film);
    return updatedFilm;
  }

  verifyFilmMoneyData(updateFilmMoneyDto: UpdateFilmMoneyDto, film: Film) {
    if (!updateFilmMoneyDto.budget && !updateFilmMoneyDto.grossWorldwide)
      throw new BadRequestException(
        'Either budget or gross worldwide must be provided',
      );
    if (updateFilmMoneyDto.budget) film.budget = updateFilmMoneyDto.budget;
    if (updateFilmMoneyDto.grossWorldwide)
      film.grossWorldwide = updateFilmMoneyDto.grossWorldwide;
    return film;
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
