import axios, { AxiosResponse } from 'axios';
import { ISetUpSearchConfig } from '../types';

export const jobSurfApiProvider = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'X-API-KEY': process.env.REACT_APP_API_ACCESS_KEY
    }
});

export const createSearchConfig = (config: ISetUpSearchConfig): Promise<AxiosResponse> =>
    jobSurfApiProvider.post(`/create-search-config`, config);
