import {useState} from 'react';
import {View, FlatList} from 'react-native';
import {ActivityIndicator, Text, TextInput, useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalTheme} from '../../../config/theme/global-theme';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';
import {getBrewerieByName} from '../../../actions/breweries/get-brewerie-by-name';
import {useQuery} from '@tanstack/react-query';
import {CardBrewerie} from '../../components/brewerie/CardBrewerie';

import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderScreen} from '../../components/ui/HeaderScreen';

export const SearchScreen = () => {
  const {dark} = useTheme();
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const debounceValue = useDebouncedValue(term, 500);

  const {isLoading, data: breweries} = useQuery({
    queryKey: ['breweries', debounceValue],
    queryFn: () => getBrewerieByName(debounceValue),
    enabled: !!debounceValue,
  });

  return (
    <View style={{paddingTop: top + 10, flex: 1}}>
      <HeaderScreen title="Busca tu cerveceria" />
      <View style={{...globalTheme.globalMargin}}>
        <TextInput
          placeholder="Ingresa un nombre"
          placeholderTextColor={dark ? '#fff' : '#4b4b4b'}
          mode="flat"
          autoFocus
          autoCorrect={false}
          value={term}
          onChangeText={setTerm}
          style={{
            backgroundColor: dark ? colors.dark.bg_200 : colors.light.bg_200,
          }}
        />
        <Icon
          name="search"
          size={22}
          style={{
            position: 'absolute',
            right: 40,
            top: 15,
            color: dark ? '#fff' : '#4b4b4b',
            zIndex: 999,
          }}
        />
      </View>

      {/* Loader */}
      {isLoading && <ActivityIndicator size="large" style={{marginTop: 20}} />}

      {/* Lista de breweries */}
      <FlatList
        data={breweries}
        keyExtractor={brewerie => brewerie.id}
        numColumns={1}
        style={{paddingTop: top + 20}}
        renderItem={({item}) => <CardBrewerie brewerie={item} />}
        onEndReachedThreshold={0.6}
        ListEmptyComponent={() => (
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
        )}
        // onEndReached={() => fetchNextPage()}
        // showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
