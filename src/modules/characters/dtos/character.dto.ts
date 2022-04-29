import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateCharacterDto {
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  alias: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  occupation: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  romance: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  family: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  first_appearance: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  last_appearance: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  played_by: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  image: string;
}

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) {}

export class FilterCharactersDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
