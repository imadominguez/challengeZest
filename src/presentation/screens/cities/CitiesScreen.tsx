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
import {getBrewerieByCity} from '../../../actions/breweries/get-brewerie-by-city';
import {FlatListBreweries} from '../../components/brewerie/FlatListBreweries';

export const CitiesScreen = () => {
  const {dark} = useTheme();
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const debounceValue = useDebouncedValue(term, 500);

  const {isLoading, data: breweries} = useQuery({
    queryKey: ['breweries', debounceValue],
    queryFn: () => getBrewerieByCity(debounceValue),
    enabled: !!debounceValue,
  });

  return (
    <View style={{paddingTop: top + 10, flex: 1}}>
      <HeaderScreen
        title="Busca tu cerveceria"
        subtitle="En la ciudad que te encuentres"
      />
      <View style={{...globalTheme.globalMargin}}>
        <TextInput
          placeholder="Ingresa una ciudad"
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
