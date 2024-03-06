import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {globalTheme} from '../../../config/theme/global-theme';
import {useBrewerieStore} from '../../store/breweries/favorites-breweries.store';
import {
  HeaderScreen,
  FlatListBreweries,
  SearchBrewerie,
} from '../../components';
import {useEffect, useState} from 'react';

export const FavoritesScreen = () => {
  const [term, setTerm] = useState('');
  const {breweries, breweriesFiltered, searchBreweries, clearBreweries} =
    useBrewerieStore(state => state);

  useEffect(() => {
    if (term === '') clearBreweries();
    searchBreweries(term);
  }, [term]);

  const search = term.length > 0;
  const breweriesRender =
    search && breweriesFiltered.length === 0
      ? []
      : !search && breweriesFiltered.length === 0
      ? breweries
      : breweriesFiltered;
  return (
    <>
      <HeaderScreen title="Tus cervecerias favoritas" />
      <SearchBrewerie term={term} setTerm={setTerm} placeholder="Buscar" />
      <View
        style={{
          flex: 1,
        }}>
        {breweries.length === 0 ? (
          <View
            style={{
              justifyContent: 'center',

              flex: 1,
            }}>
            <Text
              variant="headlineLarge"
              style={{
                textAlign: 'center',
              }}>
              No tenes ninguna cerveceria agregada a favoritos
            </Text>
          </View>
        ) : (
          <FlatListBreweries breweries={breweriesRender} numColumns={1} />
        )}
      </View>
    </>
  );
};
