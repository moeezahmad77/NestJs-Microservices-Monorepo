import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getHello(): string {
    return this.projectService.getHello();
  }
}
