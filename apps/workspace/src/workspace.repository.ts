import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'libs/common/src';
import { Workspace } from './schemas/workspace.schema';
import { Model, Connection } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
@Injectable()
export class WorkspaceRepository extends AbstractRepository<Workspace> {
  protected readonly logger = new Logger(WorkspaceRepository.name);
  constructor(
    @InjectModel(Workspace.name) workspaceModel: Model<Workspace>,
    @InjectConnection() connection: Connection,
  ) {
    super(workspaceModel, connection);
  }
}
