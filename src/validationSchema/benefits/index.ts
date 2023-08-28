import * as yup from 'yup';

export const benefitValidationSchema = yup.object().shape({
  type: yup.string().required(),
  description: yup.string().nullable(),
  value: yup.number().integer().nullable(),
  employee_id: yup.string().nullable().required(),
});
