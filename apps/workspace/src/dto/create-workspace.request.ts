import { IsString, IsNotEmpty } from 'class-validator';
export class CreateWorkspaceRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}
