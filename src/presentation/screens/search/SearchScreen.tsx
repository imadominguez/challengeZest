import {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalTheme} from '../../../config/theme/global-theme';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';
import {getBrewerieByName} from '../../../actions/breweries/get-brewerie-by-name';
import {useQuery} from '@tanstack/react-query';
import {CardBrewerie} from '../../components/brewerie/CardBrewerie';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const debounceValue = useDebouncedValue(term, 500);

  const {isLoading, data: breweries} = useQuery({
    queryKey: ['breweries', debounceValue],
    queryFn: () => getBrewerieByName(debounceValue),
    enabled: !!debounceValue,
  });

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10, flex: 1}]}>
      <Text>Busca tu cerveceria</Text>

      <TextInput
        placeholder="Ingresa un nombre"
        mode="flat"
        autoFocus
        autoCorrect={false}
        value={term}
        onChangeText={setTerm}
      />

      {/* Flat List */}
      {isLoading && <ActivityIndicator size="large" style={{marginTop: 20}} />}

      {breweries !== undefined && breweries.length > 0 && (
        <FlatList
          data={breweries}
          keyExtractor={brewerie => brewerie.id}
          numColumns={2}
          style={{paddingTop: top + 20}}
          renderItem={({item}) => <CardBrewerie brewerie={item} />}
          onEndReachedThreshold={0.6}
          // onEndReached={() => fetchNextPage()}
          // showsVerticalScrollIndicator={false}
        />
      )}

      {breweries?.length === 0 && !isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No se encontraron resultados</Text>
        </View>
      )}
    </View>
  );
};
