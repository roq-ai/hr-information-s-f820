import axios from 'axios';
import queryString from 'query-string';
import { BenefitInterface, BenefitGetQueryInterface } from 'interfaces/benefit';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBenefits = async (query?: BenefitGetQueryInterface): Promise<PaginatedInterface<BenefitInterface>> => {
  const response = await axios.get('/api/benefits', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBenefit = async (benefit: BenefitInterface) => {
  const response = await axios.post('/api/benefits', benefit);
  return response.data;
};

export const updateBenefitById = async (id: string, benefit: BenefitInterface) => {
  const response = await axios.put(`/api/benefits/${id}`, benefit);
  return response.data;
};

export const getBenefitById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/benefits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBenefitById = async (id: string) => {
  const response = await axios.delete(`/api/benefits/${id}`);
  return response.data;
};
