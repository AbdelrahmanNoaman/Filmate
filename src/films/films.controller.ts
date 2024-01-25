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
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }

  @Patch(':id/length')
  update(
    @Param('id') id: string,
    @Body() updateFilmLengthDto: UpdateFilmLengthDto,
  ) {
    return this.filmsService.updateLength(+id,updateFilmLengthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
