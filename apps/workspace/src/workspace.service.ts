import { Injectable } from '@nestjs/common';
import { CreateWorkspaceRequest } from './dto/create-workspace.request';
import { WorkspaceRepository } from './workspace.repository';
import { HelperService } from 'libs/common/src';

@Injectable()
export class WorkspaceService {
  constructor(
    private readonly workspaceRepository: WorkspaceRepository,
    private readonly helperService: HelperService,
  ) {}

  getHello(): string {
    return 'This is the workspace microservice';
  }
  createWorkspace(request: CreateWorkspaceRequest) {
    return this.workspaceRepository.create(request);
  }
  /**
   * the below is the example call to the external microservice
   */
  async externalCall() {
    const res = await this.helperService.apiCall(
      'http://localhost:3001',
      'get',
    );
    console.log('Response data is', res.data);
    return res.data;
  }
}
