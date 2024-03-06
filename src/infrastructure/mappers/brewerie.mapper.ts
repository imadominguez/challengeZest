import {Brewerie, BreweriesMetada} from '../../domain/entities/breweries';
import {images, imagesDetails} from '../../lib/data';
import {
  BreweriesAPIMetadata,
  BreweryAPI,
} from '../interfaces/brewerie-api.interface';

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
      image: getRandomImage(),
      imageDetails: getRandomImageDetails(),
    };
  }

  static breweriesMetadataToEntity(
    metadata: BreweriesAPIMetadata,
  ): BreweriesMetada {
    return {
      total: +metadata.total,
    };
  }
}

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function getRandomImageDetails() {
  let images: Set<string> = new Set();

  while (images.size < 3) {
    let num = Math.floor(Math.random() * imagesDetails.length);
    images.add(imagesDetails[num]);
  }

  return Array.from(images);
}
