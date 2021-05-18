import config from '../config/config.dev.json';
import { axiosInstance as axios } from './httpService';

export const getPeople = (page) => axios.get(`${config.url}?page=${page}`);
export const getPersonById = (id) => axios.get(`${config.url}/${id}`);
export const getFilm = (url) => axios.get(url);