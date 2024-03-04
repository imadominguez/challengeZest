import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  View,
  FlatList,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {Text} from 'react-native-paper';
import {HomeScreenStackParamList} from '../../navigator/HomeStackNavigator';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {getBreweries} from '../../../actions/breweries/get-breweries';
import {globalTheme} from '../../../config/theme/global-theme';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CardBrewerie} from '../../components/brewerie/CardBrewerie';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<HomeScreenStackParamList>>();

  const {isLoading, data: breweries} = useQuery({
    queryKey: ['breweries'],
    queryFn: () => getBreweries(0),
    staleTime: 1000 * 60 * 60, // 60 minutos
  });

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={{...globalTheme.globalMargin, flex: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: top + 10,
        }}>
        <Text variant="headlineMedium" numberOfLines={1}>
          Cervecerias del mundo
        </Text>
        <Pressable>
          <Text>Mostrar todas</Text>
        </Pressable>
      </View>
      <FlatList
        data={breweries ?? []}
        keyExtractor={brewerie => brewerie.id}
        numColumns={1}
        style={{paddingTop: top + 20}}
        renderItem={({item}) => <CardBrewerie brewerie={item} />}
        onEndReachedThreshold={0.6}
        // onEndReached={() => fetchNextPage()}
        // showsVerticalScrollIndicator={false}
      />

      <View>
        <Text variant="labelLarge">Botones de paginado</Text>
      </View>
    </View>
  );
};
