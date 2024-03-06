import {View, FlatList} from 'react-native';
import {useBrewerieStore} from '../../store/breweries/favorites-breweries.store';
import {HeaderScreen} from '../../components/ui/HeaderScreen';
import {CardBrewerie} from '../../components/brewerie/CardBrewerie';
import {globalTheme} from '../../../config/theme/global-theme';
import {Text} from 'react-native-paper';
import {FlatListBreweries} from '../../components/brewerie/FlatListBreweries';

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
          <FlatListBreweries breweries={breweries ?? []} numColumns={1} />
        )}
      </View>
    </>
  );
};
