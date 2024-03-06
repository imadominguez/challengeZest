import {breweryApi} from '../../config/api/BreweryApi';
import {City} from '../../domain/entities/cities';
import {BreweryAPI} from '../../infrastructure/interfaces/brewerie-api.interface';
import {CitiesMapper} from '../../infrastructure/mappers/cities.mapper';

export const getCities = async (): Promise<City[]> => {
  try {
    const url = '/breweries';
    const {data} = await breweryApi.get(url);

    const cities: City[] = data.map(CitiesMapper.brewerieApiToEntityCity);

    const citiesFormatted = Array.from(
      new Set(cities.map(item => item.name)),
    ).map(name => ({
      name,
    }));

    return citiesFormatted;
  } catch (error) {
    throw new Error('No se pudo obtener las ciudades');
  }
};
