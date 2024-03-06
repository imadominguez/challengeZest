import {View, FlatList, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalTheme} from '../../../config/theme/global-theme';
import {CardBrewerie} from '../../components/brewerie/CardBrewerie';
import {ScreenLoader} from '../../components/loaders/ScreenLoader';
import {HeaderScreen} from '../../components/ui/HeaderScreen';
import {usePaginated} from '../../hooks/usePaginated';
import {ButtonPaginated} from '../../components/ui/paginated/ButtonPaginated';
import {ButtonsPaginated} from '../../components/ui/paginated/ButtonsPaginated';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isDark} = useContext(ThemeContext);
  const {
    page,
    handlePageChange,
    handleNextPage,
    handlePrevPage,
    isLoadingBreweries,
    breweries,
    paginationButtons,
  } = usePaginated();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? top + 20 : 0,
        backgroundColor: isDark ? colors.dark.bg_100 : colors.light.bg_100,
      }}>
      <HeaderScreen text="Brewery APP" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <ButtonPaginated onPress={handlePrevPage} text="-" />

        <ButtonsPaginated
          page={page}
          paginationButtons={paginationButtons}
          onPress={handlePageChange}
        />
        <ButtonPaginated onPress={handleNextPage} text="+" />
      </View>

      <View
        style={{
          flex: 1,
          ...globalTheme.globalMargin,
        }}>
        {isLoadingBreweries ? (
          <ScreenLoader />
        ) : (
          <FlatList
            data={breweries ?? []}
            keyExtractor={brewerie => brewerie.id}
            numColumns={1}
            renderItem={({item}) => <CardBrewerie brewerie={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
