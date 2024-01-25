import { Injectable } from '@nestjs/common';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TvShow } from './entities/tv-show.entity';
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

  findOne(id: number) {
    return `This action returns a #${id} tvShow`;
  }

  update(id: number, updateTvShowDto: UpdateTvShowDto) {
    return `This action updates a #${id} tvShow`;
  }

  remove(id: number) {
    return `This action removes a #${id} tvShow`;
  }
}
