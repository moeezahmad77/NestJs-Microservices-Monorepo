import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateWorkspaceRequest } from './dto/create-workspace.request';
import { WorkspaceService } from './workspace.service';

@Controller()
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Get()
  getHello(): string {
    return this.workspaceService.getHello();
  }

  @Post()
  createWorkspace(@Body() request: CreateWorkspaceRequest) {
    return this.workspaceService.createWorkspace(request);
  }

  /**
   * External call example
   */
  @Get('/proj')
  externalCall() {
    return this.workspaceService.externalCall();
  }
}
