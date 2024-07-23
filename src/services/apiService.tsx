import axios from 'axios';
import { Content } from '@/types/types';

export const fetchData = async (): Promise<Content> => {
  const response = await axios.get<Content>('/mock.json');
  return response.data;
};
