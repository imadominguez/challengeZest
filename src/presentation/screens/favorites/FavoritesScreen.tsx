import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {globalTheme} from '../../../config/theme/global-theme';
import {useBrewerieStore} from '../../store/breweries/favorites-breweries.store';
import {HeaderScreen, FlatListBreweries} from '../../components';

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
