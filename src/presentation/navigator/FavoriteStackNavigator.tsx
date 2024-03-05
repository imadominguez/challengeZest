import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen} from '../screens/details/DetailsScreen';
import {FavoritesScreen} from '../screens/favorites/FavoritesScreen';

export type FavoritesScreenStackParamList = {
  FavoritesScreen: undefined;
  Details: {brewerieId: string};
};

const FavoritesScreenStackNavigation =
  createNativeStackNavigator<FavoritesScreenStackParamList>();

export const FavoritesStackNavigator = () => {
  return (
    <FavoritesScreenStackNavigation.Navigator
      initialRouteName="FavoritesScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <FavoritesScreenStackNavigation.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
      />
      <FavoritesScreenStackNavigation.Screen
        name="Details"
        component={DetailsScreen}
      />
    </FavoritesScreenStackNavigation.Navigator>
  );
};
