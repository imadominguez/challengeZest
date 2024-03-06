import {useQuery} from '@tanstack/react-query';
import {getBreweries} from '../../actions/breweries/get-breweries';

interface Props {
  page: number;
  totalPages: number | undefined;
}

export const useBreweries = ({page, totalPages}: Props) => {
  const {isLoading: isLoadingBreweries, data: breweries} = useQuery({
    queryKey: ['breweries', page],
    queryFn: () => getBreweries(page),
    enabled: !!totalPages,
  });

  return {isLoadingBreweries, breweries};
};
