import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceService } from './workspace.service';

describe('WorkspaceController', () => {
  let workspaceController: WorkspaceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WorkspaceController],
      providers: [WorkspaceService],
    }).compile();

    workspaceController = app.get<WorkspaceController>(WorkspaceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workspaceController.getHello()).toBe('Hello World!');
    });
  });
});
