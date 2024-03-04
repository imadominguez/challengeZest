import axios from 'axios';

export const breweryApi = axios.create({
  baseURL: 'https://api.openbrewerydb.org/v1',
});
