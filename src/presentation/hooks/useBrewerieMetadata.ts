import {useQuery} from '@tanstack/react-query';
import {getBrewerieMetadata} from '../../actions/breweries/get-brewerie-metadata';

export const useBrewerieMetadata = () => {
  const {isLoading, data: totalBreweries} = useQuery({
    queryKey: ['paginated'],
    queryFn: () => getBrewerieMetadata(),
  });

  return {isLoading, totalBreweries};
};
