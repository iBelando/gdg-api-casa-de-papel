import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Character } from './entities/character.entity';
import {
  CreateCharacterDto,
  UpdateCharacterDto,
  FilterCharactersDto,
} from './dtos/character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character.name) private characterModel: Model<Character>,
  ) {}

  findAll(params?: FilterCharactersDto) {
    if (params) {
      const filters: FilterQuery<Character> = {};
      const { limit, offset } = params;
      return this.characterModel
        .find(filters, '-_id')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.characterModel.find({}, '-_id').exec();
  }

  async findOne(id: number) {
    const character = await this.characterModel.findOne({ id }, '-_id').exec();
    if (!character) {
      throw new NotFoundException(`Character with the id "${id}" not found.`);
    }
    return character;
  }

  async findByName(name: string) {
    const character = await this.characterModel
      .find({ name: { $regex: name, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with the name "${name}" not found.`,
      );
    }
    return character;
  }

  async findByAlias(alias: string) {
    const character = await this.characterModel
      .find({ alias: { $regex: alias, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with the alias "${alias}" not found.`,
      );
    }
    return character;
  }

  async findByOccupation(occupation: string) {
    const character = await this.characterModel
      .find({ occupation: { $regex: occupation, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with the occupation "${occupation}" not found.`,
      );
    }
    return character;
  }

  async findByGender(gender: string) {
    const character = await this.characterModel
      .find({ gender: { $regex: gender, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with the gender "${gender}" not found.`,
      );
    }
    return character;
  }

  async findByStatus(status: string) {
    const character = await this.characterModel
      .find({ status: { $regex: status, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with the status "${status}" not found.`,
      );
    }
    return character;
  }

  async findByRomance(romance: string) {
    const character = await this.characterModel
      .find({ romance: { $regex: romance, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with the romance "${romance}" not found.`,
      );
    }
    return character;
  }

  async findByFamily(family: string) {
    const character = await this.characterModel
      .find({ family: { $regex: family, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with the family "${family}" not found.`,
      );
    }
    return character;
  }

  async findByFirstAppearance(firstAppearance: string) {
    const character = await this.characterModel
      .find(
        { firstAppearance: { $regex: firstAppearance, $options: 'i' } },
        '-_id',
      )
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with his/her first appearance in "${firstAppearance}" not found.`,
      );
    }
    return character;
  }

  async findByLastAppearance(lastAppearance: string) {
    const character = await this.characterModel
      .find(
        { lastAppearance: { $regex: lastAppearance, $options: 'i' } },
        '-_id',
      )
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character with his/her last appearance in "${lastAppearance}" not found.`,
      );
    }
    return character;
  }

  async findByPlayedBy(playedBy: string) {
    const character = await this.characterModel
      .find({ playedBy: { $regex: playedBy, $options: 'i' } }, '-_id')
      .exec();
    if (!character) {
      throw new NotFoundException(
        `Character played by "${playedBy}" not found.`,
      );
    }
    return character;
  }

  async create(createCharacerDto: CreateCharacterDto) {
    const newModel = new this.characterModel(createCharacerDto);
    const lastId = await this.getLastId();
    newModel.id = lastId + 1;
    return await newModel.save();
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    const character = await this.findOne(id);
    if (!character) {
      throw new NotFoundException();
    }
    return await this.characterModel
      .findOneAndUpdate({ id }, { $set: updateCharacterDto }, { new: true })
      .exec();
  }

  async remove(id: number) {
    const character = await this.findOne(id);
    if (character) {
      return await this.characterModel.findOneAndRemove({ id }).exec();
    }
  }

  async getLastId() {
    const lastDocument = await this.characterModel
      .find()
      .sort({ id: -1 })
      .limit(1)
      .select('id -_id');
    return lastDocument[0].id;
  }
}
