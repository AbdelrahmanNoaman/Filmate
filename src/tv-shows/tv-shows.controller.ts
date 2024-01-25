import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TvShowsService } from './tv-shows.service';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowCountryOfOriginDTO } from './dto/update-tv-show-country-of-origin.dto';
import { UpdateTvShowSummaryDTO } from './dto/update-tv-show-summary.dto';
@Controller('tv-shows')
export class TvShowsController {
  constructor(private readonly tvShowsService: TvShowsService) {}

  @Post()
  create(@Body() createTvShowDto: CreateTvShowDto) {
    return this.tvShowsService.create(createTvShowDto);
  }

  @Get()
  findAll() {
    return this.tvShowsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tvShowsService.findOne(+id);
  }

  @Patch(':id/country')
  updateCountryOfOrigin(
    @Param('id') id: string,
    @Body() updateTvShowCountryOfOriginDTO: UpdateTvShowCountryOfOriginDTO,
  ) {
    return this.tvShowsService.updateCountryOfOrigin(
      +id,
      updateTvShowCountryOfOriginDTO,
    );
  }

  @Patch(':id/summary')
  updateSummary(
    @Param('id') id: string,
    @Body() updateTvShowSummaryDTO: UpdateTvShowSummaryDTO,
  ) {
    return this.tvShowsService.updateSummary(+id, updateTvShowSummaryDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tvShowsService.remove(+id);
  }
}
