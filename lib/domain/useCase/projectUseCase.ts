import { ProjectGateway } from '../model/gateways/projectGatewat';

export class createProject {
  private projectGateway: ProjectGateway;

  constructor(projectGateway: ProjectGateway) {
    this.projectGateway = projectGateway;
  }
}
