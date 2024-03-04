export interface BrewerieAPIResponse {
  brewerie: BreweryAPI[];
}

export interface BreweryAPI {
  id: string;
  name: string;
  brewery_type: string;
  addres_1: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state: string;
  county_province: string;
  postal_code: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  street: string;
}
