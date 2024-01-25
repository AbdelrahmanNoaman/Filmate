import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmLengthDto } from './dto/update-film.dto';
import { UseFilters } from '@nestjs/common';
import { NotFoundExceptionFilter } from '../exceptions/not-found-exception.filter';
import { UpdateFilmMoneyDto } from './dto/update-film-money.dto';
@Controller('film')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    try {
      return this.filmsService.create(createFilmDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  @UseFilters(new NotFoundExceptionFilter())
  async findOne(@Param('id') id: string) {
    return await this.filmsService.findOne(+id);
  }

  @Get(':id/actors')
  @UseFilters(new NotFoundExceptionFilter())
  async findFilmActors(@Param('id') id: string) {
    return await this.filmsService.findFilmActors(+id);
  }

  @Patch(':id/length')
  @UseFilters(new NotFoundExceptionFilter())
  update(
    @Param('id') id: string,
    @Body() updateFilmLengthDto: UpdateFilmLengthDto,
  ) {
    return this.filmsService.updateLength(+id, updateFilmLengthDto);
  }

  @Patch(':id/money')
  @UseFilters(new NotFoundExceptionFilter())
  updateMoney(
    @Param('id') id: string,
    @Body() updateFilmMoneyDto: UpdateFilmMoneyDto,
  ) {
    return this.filmsService.updateMoney(+id, updateFilmMoneyDto);
  }

  @Delete(':id')
  @UseFilters(new NotFoundExceptionFilter())
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
