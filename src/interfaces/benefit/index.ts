import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface BenefitInterface {
  id?: string;
  type: string;
  description?: string;
  value?: number;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface BenefitGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  description?: string;
  employee_id?: string;
}
