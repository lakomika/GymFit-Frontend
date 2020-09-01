import {Client} from './Client';
import {Receptionist} from '../../admin/management-receptionist/Receptionist';
import {Coach} from './Coach';

export interface UserAppResponse {
  content: UserApp[];
  totalElements: number;
}

export class UserApp {
  username: string;
  email: string;
  password: string;
  client: Client;
  receptionist: Receptionist;
  coach: Coach;
  id: number;
}
