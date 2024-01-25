import { Injectable } from '@nestjs/common';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TvShow } from './entities/tv-show.entity';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class TvShowsService {
  constructor(
    @InjectRepository(TvShow) private tvShowRepository: Repository<TvShow>,
  ) {}

  async create(createTvShowDto: CreateTvShowDto) {
    const tvShow = this.tvShowRepository.create(createTvShowDto);
    return await this.tvShowRepository.save(tvShow);
  }

  findAll() {
    return this.tvShowRepository.findBy({ isDeleted: false });
  }

  async findOne(id: number) {
    try {
      const film = await this.tvShowRepository.findOneOrFail({
        where: { id: id, isDeleted: false },
      });
      return film;
    } catch (error) {
      throw new NotFoundException('Film not found or deleted');
    }
  }

  async update(id: number, updateTvShowDto: UpdateTvShowDto) {
    const film = await this.findOne(id);
    let updatedFilm = await this.tvShowRepository.save(film);
    return updatedFilm;
  }

  remove(id: number) {
    return `This action removes a #${id} tvShow`;
  }
}
