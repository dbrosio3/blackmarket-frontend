import Axios from 'axios';

import { API_URL } from '@/config';

export const axiosClient = Axios.create({
  baseURL: API_URL,
});
