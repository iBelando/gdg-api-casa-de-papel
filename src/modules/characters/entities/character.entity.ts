import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Character extends Document {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  alias: string;

  @Prop({ required: true })
  occupation: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  romance: string;

  @Prop({ required: true })
  family: string;

  @Prop({ required: true })
  first_appearance: string;

  @Prop({ required: true })
  last_appearance: string;

  @Prop({ required: true })
  played_by: string;

  @Prop({ required: true })
  image: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
