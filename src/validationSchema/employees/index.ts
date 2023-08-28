import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  job_title: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});
