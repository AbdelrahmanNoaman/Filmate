import { Injectable } from '@nestjs/common';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowCountryOfOriginDTO } from './dto/update-tv-show-country-of-origin.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TvShow } from './entities/tv-show.entity';
import { NotFoundException } from '@nestjs/common';
import { UpdateTvShowSummaryDTO } from './dto/update-tv-show-summary.dto';
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
      const tvShow = await this.tvShowRepository.findOneOrFail({
        where: { id: id, isDeleted: false },
      });
      return tvShow;
    } catch (error) {
      throw new NotFoundException('tv Show not found or deleted');
    }
  }

  async updateCountryOfOrigin(
    id: number,
    updateTvShowCountryOfOriginDTO: UpdateTvShowCountryOfOriginDTO,
  ) {
    const tvShow = await this.findOne(id);
    tvShow.countryOfOrigin = updateTvShowCountryOfOriginDTO.countryOfOrigin;
    let updatedTvShow = await this.tvShowRepository.save(tvShow);
    return updatedTvShow;
  }

  async updateSummary(
    id: number,
    updateTvShowSummaryDTO: UpdateTvShowSummaryDTO,
  ) {
    const tvShow = await this.findOne(id);
    tvShow.summary = updateTvShowSummaryDTO.summary;
    let updatedTvShow = await this.tvShowRepository.save(tvShow);
    return updatedTvShow;
  }

  remove(id: number) {
    return `This action removes a #${id} tvShow`;
  }
}
