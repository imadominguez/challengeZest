import {breweryApi} from '../../config/api/BreweryApi';
import {Brewerie} from '../../domain/entities/breweries';
import {BreweryAPI} from '../../infrastructure/interfaces/brewerie-api.interface';
import {BrewerieMapper} from '../../infrastructure/mappers/brewerie.mapper';

export const getBrewerieById = async (id: string): Promise<Brewerie> => {
  try {
    const url = `/breweries/${id}`;
    const {data} = await breweryApi.get<BreweryAPI>(url);

    const brewerieMapped = BrewerieMapper.brewerieApiToEntity(data);

    return brewerieMapped;
  } catch (error) {
    throw new Error(`No se pudo obtener la cerveceria con id ${id}`);
  }
};
