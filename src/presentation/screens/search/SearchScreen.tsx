import {useContext, useState} from 'react';
import {Platform, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Text} from 'react-native-paper';
import {useDebouncedValue} from '../../hooks';
import {getBrewerieByName} from '../../../actions/breweries/get-brewerie-by-name';
import {
  HeaderScreen,
  FlatListBreweries,
  SearchBrewerie,
} from '../../components';
import {ThemeContext} from '../../context/ThemeContext';

export const SearchScreen = () => {
  const {isDark} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const debounceValue = useDebouncedValue(term, 500);

  const {isLoading, data: breweries} = useQuery({
    queryKey: ['breweries', debounceValue],
    queryFn: () => getBrewerieByName(debounceValue),
    enabled: !!debounceValue,
  });

  return (
    <View style={{paddingTop: Platform.OS === 'ios' ? top + 20 : 0, flex: 1}}>
      <HeaderScreen title="Busca tu cerveceria" />
      <SearchBrewerie
        term={term}
        setTerm={setTerm}
        placeholder="Ingresa un nombre"
      />

      {/* Loader */}
      {isLoading && <ActivityIndicator size="large" style={{marginTop: 20}} />}

      {/* Lista de breweries */}
      <FlatListBreweries
        breweries={breweries ?? []}
        numColumns={1}
        style={{paddingTop: top + 20}}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              marginTop: 100,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Text variant="headlineLarge">
              {term.length > 0 &&
                breweries?.length === 0 &&
                !isLoading &&
                'No se encontraron cervecerias'}
            </Text>
          </View>
        }
      />
    </View>
  );
};
