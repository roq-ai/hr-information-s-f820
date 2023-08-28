import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  salary: yup.number().integer().required(),
  bonus: yup.number().integer().nullable(),
  deductions: yup.number().integer().nullable(),
  employee_id: yup.string().nullable().required(),
});
