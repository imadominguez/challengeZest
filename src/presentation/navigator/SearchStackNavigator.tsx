import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../screens/details/DetailsScreen';
import {SearchScreen} from '../screens/search/SearchScreen';

export type SearchScreenStackParamList = {
  SearchScreen: undefined;
  Details: {brewerieId: string};
};

const SearchScreenStackNavigation =
  createNativeStackNavigator<SearchScreenStackParamList>();

export const SearchStackNavigator = () => {
  return (
    <SearchScreenStackNavigation.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <SearchScreenStackNavigation.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
      <SearchScreenStackNavigation.Screen
        name="Details"
        component={DetailsScreen}
      />
    </SearchScreenStackNavigation.Navigator>
  );
};
