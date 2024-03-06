import {useContext} from 'react';
import {View, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalTheme} from '../../../config/theme/global-theme';
import {usePaginated} from '../../hooks';
import {ThemeContext} from '../../context/ThemeContext';
import {
  ScreenLoader,
  HeaderScreen,
  ButtonPaginated,
  ButtonsPaginated,
  FlatListBreweries,
} from '../../components';

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
      <HeaderScreen title="Brewery APP" />

      <View
        style={{
          marginHorizontal: 10,
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
          <FlatListBreweries breweries={breweries ?? []} numColumns={1} />
        )}
      </View>
    </View>
  );
};
