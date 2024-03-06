import {useContext, useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, TextInput} from 'react-native-paper';
import {colors, globalTheme} from '../../../config/theme/global-theme';
import {useDebouncedValue} from '../../hooks';
import {getBrewerieByName} from '../../../actions/breweries/get-brewerie-by-name';
import {HeaderScreen, FlatListBreweries} from '../../components';
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
    <View style={{paddingTop: top + 10, flex: 1}}>
      <HeaderScreen title="Busca tu cerveceria" />
      <View style={{...globalTheme.globalMargin}}>
        <TextInput
          placeholder="Ingresa un nombre"
          placeholderTextColor={isDark ? '#fff' : '#4b4b4b'}
          mode="flat"
          autoFocus
          autoCorrect={false}
          value={term}
          onChangeText={setTerm}
          style={{
            backgroundColor: isDark ? colors.dark.bg_200 : colors.light.bg_200,
          }}
        />
        <Icon
          name="search"
          size={22}
          style={{
            position: 'absolute',
            right: 40,
            top: 15,
            color: isDark ? '#fff' : '#4b4b4b',
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
