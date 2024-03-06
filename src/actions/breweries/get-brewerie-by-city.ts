import {breweryApi} from '../../config/api/BreweryApi';
import {Brewerie} from '../../domain/entities/breweries';
import {BreweryAPI} from '../../infrastructure/interfaces/brewerie-api.interface';
import {BrewerieMapper} from '../../infrastructure/mappers/brewerie.mapper';

export const getBrewerieByCity = async (name: string): Promise<Brewerie[]> => {
  try {
    const city = name.replace(' ', '_');
    const url = `/breweries?by_city=${city}`;

    const {data} = await breweryApi.get(url);

    const brewerieMapped = data.map((data: BreweryAPI) =>
      BrewerieMapper.brewerieApiToEntity(data),
    );

    return brewerieMapped;
  } catch (error) {
    throw new Error('');
  }
};
