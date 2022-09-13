import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceService } from './workspace.service';
import { DatabaseModule, HelperService } from 'libs/common/src';
import { WorkspaceRepository } from './workspace.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import * as Joi from 'joi';
import { Workspace, WorkspaceSchema } from './schemas/workspace.schema';

@Module({
  /**
   * Instantiate config module
   */
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/workspace/.env',
    }),
    DatabaseModule,
    /**
     * Registering schema with each schema
     */
    MongooseModule.forFeature([
      { name: Workspace.name, schema: WorkspaceSchema },
    ]),
  ],
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceRepository, HelperService],
})
export class WorkspaceModule {}
