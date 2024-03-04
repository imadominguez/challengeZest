import {Brewerie} from '../../domain/entities/breweries';
import {BreweryAPI} from '../interfaces/brewerie-api.interface';

export class BrewerieMapper {
  static brewerieApiToEntity(brewerie: BreweryAPI): Brewerie {
    return {
      id: brewerie.id,
      name: brewerie.name,
      brewery_type: brewerie.brewery_type,
      address_1: brewerie.addres_1,
      address_2: brewerie.address_2,
      address_3: brewerie.address_3,
      city: brewerie.city,
      province: brewerie.county_province,
      postal_code: brewerie.postal_code,
      country: brewerie.country,
      phone: brewerie.phone,
      url: brewerie.website_url,
      state: brewerie.state,
      street: brewerie.street,
    };
  }
}
