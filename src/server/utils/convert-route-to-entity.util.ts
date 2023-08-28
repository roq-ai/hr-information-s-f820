const mapping: Record<string, string> = {
  benefits: 'benefit',
  companies: 'company',
  employees: 'employee',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
