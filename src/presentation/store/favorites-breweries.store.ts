import {create} from 'zustand';
import {Brewerie} from '../../domain/entities/breweries';

interface BrewerieStore {
  breweries: Brewerie[];

  // añadimos una brewerie
  addBrewerie: (brewerie: Brewerie) => void;
  // eliminamos una brewerie
  deleteBrewerie: (id: string) => void;
  // limpiamos las breweries
  clearBreweries: () => void;
  // actualizamos las breweries
}

export const useBrewerieStore = create<BrewerieStore>(set => ({
  breweries: [],
  addBrewerie: brewerie =>
    set(state => ({breweries: [...state.breweries, brewerie]})),
  deleteBrewerie: id =>
    set(state => ({
      breweries: state.breweries.filter(brewery => brewery.id !== id),
    })),
  clearBreweries: () => set({breweries: []}),
}));
