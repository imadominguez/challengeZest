import {View, Text, FlatList} from 'react-native';
import {useBrewerieStore} from '../../store/favorites-breweries.store';
import {HeaderScreen} from '../../components/ui/HeaderScreen';
import {CardBrewerie} from '../../components/brewerie/CardBrewerie';
import {globalTheme} from '../../../config/theme/global-theme';

export const FavoritesScreen = () => {
  const breweries = useBrewerieStore(state => state.breweries);
  return (
    <>
      <HeaderScreen text="Tus cervecerias favoritas" />
      <View
        style={{
          ...globalTheme.globalMargin,
          flex: 1,
          justifyContent: 'center',
        }}>
        {breweries.length === 0 ? (
          <Text>No tenes ninguna cerveceria agregada a favoritos</Text>
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
