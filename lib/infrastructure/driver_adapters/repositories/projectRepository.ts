import { ProjectGateway } from '@/lib/domain/model/gateways/projectGatewat';
import { Project } from '@/lib/domain/model/project';
import { User } from '@/lib/domain/model/user';

export default class ProjectRepository implements ProjectGateway {
  constructor() {}
  getProjectsByUser(user: User): Promise<{ error?: any }> {
    throw new Error('Method not implemented.');
  }
  createNewProject(project: Project): Promise<{ error?: any }> {
    throw new Error('Method not implemented.');
  }
  editProject(project: Project): Promise<{ error?: any }> {
    throw new Error('Method not implemented.');
  }
}
