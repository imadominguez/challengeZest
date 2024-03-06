import {View, FlatList} from 'react-native';
import {useBrewerieStore} from '../../store/favorites-breweries.store';
import {HeaderScreen} from '../../components/ui/HeaderScreen';
import {CardBrewerie} from '../../components/brewerie/CardBrewerie';
import {globalTheme} from '../../../config/theme/global-theme';
import {Text} from 'react-native-paper';

export const FavoritesScreen = () => {
  const breweries = useBrewerieStore(state => state.breweries);
  return (
    <>
      <HeaderScreen title="Tus cervecerias favoritas" />
      <View
        style={{
          ...globalTheme.globalMargin,
          flex: 1,
          justifyContent: 'center',
        }}>
        {breweries.length === 0 ? (
          <Text
            style={{
              textAlign: 'center',
            }}>
            No tenes ninguna cerveceria agregada a favoritos
          </Text>
        ) : (
          <FlatList
            data={breweries ?? []}
            keyExtractor={brewerie => brewerie.id}
            numColumns={1}
            renderItem={({item}) => <CardBrewerie brewerie={item} />}
            // onEndReachedThreshold={0.6}
            // onEndReached={() => fetchNextPage()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};
