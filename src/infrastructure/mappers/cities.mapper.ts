import {BreweryAPI} from '../interfaces/brewerie-api.interface';

export class CitiesMapper {
  static brewerieApiToEntityCity(breweries: BreweryAPI) {
    return {
      name: breweries.city,
    };
  }
}
