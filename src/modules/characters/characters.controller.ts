import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CharactersService } from './characters.service';
import { CreateCharacterDto, UpdateCharacterDto } from './dtos/character.dto';

@ApiTags('Characters')
@Controller('/api/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.charactersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number) {
    return this.charactersService.findOne(id);
  }

  @Get('/name/:name')
  @HttpCode(HttpStatus.OK)
  findByName(@Param('name') name: string) {
    return this.charactersService.findByName(name);
  }

  @Get('/alias/:alias')
  @HttpCode(HttpStatus.OK)
  findByAlias(@Param('alias') alias: string) {
    return this.charactersService.findByAlias(alias);
  }

  @Get('/occupation/:occupation')
  @HttpCode(HttpStatus.OK)
  findByOccupation(@Param('occupation') occupation: string) {
    return this.charactersService.findByOccupation(occupation);
  }

  @Get('/gender/:gender')
  @HttpCode(HttpStatus.OK)
  findByGender(@Param('gender') gender: string) {
    return this.charactersService.findByGender(gender);
  }

  @Get('/status/:status')
  @HttpCode(HttpStatus.OK)
  findByStatus(@Param('status') status: string) {
    return this.charactersService.findByStatus(status);
  }

  @Get('/romance/:romance')
  @HttpCode(HttpStatus.OK)
  findByRomance(@Param('romance') romance: string) {
    return this.charactersService.findByRomance(romance);
  }

  @Get('/family/:family')
  @HttpCode(HttpStatus.OK)
  findByFamily(@Param('family') family: string) {
    return this.charactersService.findByFamily(family);
  }

  @Get('/first-appearance/:firstAppearance')
  @HttpCode(HttpStatus.OK)
  findByFirstAppearance(@Param('firstAppearance') firstAppearance: string) {
    return this.charactersService.findByFirstAppearance(firstAppearance);
  }

  @Get('/last-appearance/:lastAppearance')
  @HttpCode(HttpStatus.OK)
  findByLastAppearance(@Param('lastAppearance') lastAppearance: string) {
    return this.charactersService.findByLastAppearance(lastAppearance);
  }

  @Get('/played-by/:playedBy')
  @HttpCode(HttpStatus.OK)
  findByPlayedBy(@Param('playedBy') playedBy: string) {
    return this.charactersService.findByPlayedBy(playedBy);
  }

  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.charactersService.create(createCharacterDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.charactersService.update(id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.charactersService.remove(id);
  }
}
