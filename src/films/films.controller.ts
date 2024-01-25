import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
// not-found-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  NotFoundException,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmLengthDto } from './dto/update-film.dto';
import { UseFilters } from '@nestjs/common';
import { NotFoundExceptionFilter } from '../exceptions/not-found-exception.filter';
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
      const film = await this.filmsService.findOne(+id);
  }

  @Patch(':id/length')
  @UseFilters(new NotFoundExceptionFilter())
  update(
    @Param('id') id: string,
    @Body() updateFilmLengthDto: UpdateFilmLengthDto,
  ) {
    return this.filmsService.updateLength(+id, updateFilmLengthDto);
  }

  @Delete(':id')
  @UseFilters(new NotFoundExceptionFilter())
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
