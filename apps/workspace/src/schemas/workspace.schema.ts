import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'libs/common/src';

@Schema()
export class Workspace extends AbstractDocument {
  @Prop()
  name: string;
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
