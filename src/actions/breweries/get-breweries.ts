import {breweryApi} from '../../config/api/BreweryApi';
import {Brewerie} from '../../domain/entities/breweries';
import {BrewerieMapper} from '../../infrastructure/mappers/brewerie.mapper';

export const getBreweries = async (
  page: number,
  limit: number = 20,
): Promise<Brewerie[]> => {
  try {
    const url = `/breweries?page=${page}&per_page=${limit}`;
    const {data} = await breweryApi.get(url);

    const breweriesMapped: Brewerie[] = data.map(
      BrewerieMapper.brewerieApiToEntity,
    );

    return breweriesMapped;
  } catch (error) {
    throw new Error('No se pudieron obtener las cervecerias');
  }
};
