import {create} from 'zustand';
import {Brewerie} from '../../../domain/entities/breweries';

interface BrewerieStore {
  breweries: Brewerie[];

  // añadimos o eliminamos una brewerie
  updateBrewerie: (brewerie: Brewerie) => void;
  // limpiamos las breweries
  clearBreweries: () => void;
}

export const useBrewerieStore = create<BrewerieStore>(set => ({
  breweries: [],
  updateBrewerie: brewerie => {
    set(state => {
      const existingBrewerie = state.breweries.find(b => b.id === brewerie.id);
      if (existingBrewerie) {
        // Si la cervecería ya está en el estado, la eliminamos
        return {breweries: state.breweries.filter(b => b.id !== brewerie.id)};
      } else {
        // Si no está en el estado, la agregamos
        return {breweries: [...state.breweries, brewerie]};
      }
    });
  },
  clearBreweries: () => set({breweries: []}),
}));
