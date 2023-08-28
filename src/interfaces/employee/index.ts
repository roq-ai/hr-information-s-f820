import { BenefitInterface } from 'interfaces/benefit';
import { PayrollInterface } from 'interfaces/payroll';
import { VacationInterface } from 'interfaces/vacation';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  job_title: string;
  start_date: any;
  end_date?: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  benefit?: BenefitInterface[];
  payroll?: PayrollInterface[];
  vacation?: VacationInterface[];
  company?: CompanyInterface;
  _count?: {
    benefit?: number;
    payroll?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  job_title?: string;
  company_id?: string;
}
