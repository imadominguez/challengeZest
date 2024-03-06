import {breweryApi} from '../../config/api/BreweryApi';
import {BreweriesMetada} from '../../domain/entities/breweries';
import {BrewerieMapper} from '../../infrastructure/mappers/brewerie.mapper';

export const getBrewerieMetadata = async (): Promise<BreweriesMetada> => {
  try {
    const url = '/breweries/meta';
    const {data} = await breweryApi.get(url);

    const totalBreweries = BrewerieMapper.breweriesMetadataToEntity(data);
    return totalBreweries;
  } catch (error) {
    throw new Error('No se pudo obtener el total de cervecerias');
  }
};
