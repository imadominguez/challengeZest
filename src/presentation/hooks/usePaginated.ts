import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {getBreweries} from '../../actions/breweries/get-breweries';
import {useBrewerieMetadata} from './useBrewerieMetadata';
import {useBreweries} from './useBreweries';

const perPage = 10;

export const usePaginated = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number | undefined>();
  const [paginationButtons, setPaginationButtons] = useState<number[]>([]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleNextPage = () => {
    if (page === totalPages) {
      return;
    }
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page === 0) {
      return;
    }
    setPage(page - 1);
  };

  // Obtenemos el total de cervecerias de la API
  const {isLoading, totalBreweries} = useBrewerieMetadata();

  if (!isLoading && totalBreweries && !totalPages) {
    // Calcular total de paginas
    setTotalPages(Math.ceil(totalBreweries.total / perPage));
  }

  // Obtenemos las cervecerias de la pagina actual
  const {isLoadingBreweries, breweries} = useBreweries({page, totalPages});

  useEffect(() => {
    if (totalPages) {
      const buttonsToShow = 5; // Mostrar 5 botones en total

      // Calculamos el rango de botones a mostrar
      const startPage = Math.max(0, page - 2);
      const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);

      const auxPaginationButtons = [];
      for (let i = startPage; i <= endPage; i++) {
        auxPaginationButtons.push(i);
      }
      setPaginationButtons(auxPaginationButtons);
    }
  }, [totalPages, page]);

  return {
    page,
    handlePageChange,
    totalPages,
    handleNextPage,
    handlePrevPage,
    isLoadingBreweries,
    paginationButtons,
    breweries,
  };
};
