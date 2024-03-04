import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailsScreen} from '../screens/details/DetailsScreen';

export type HomeScreenStackParamList = {
  HomeScreen: undefined;
  Details: undefined;
};

const HomeScreenStackNavigation =
  createNativeStackNavigator<HomeScreenStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <HomeScreenStackNavigation.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <HomeScreenStackNavigation.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeScreenStackNavigation.Screen
        name="Details"
        component={DetailsScreen}
      />
    </HomeScreenStackNavigation.Navigator>
  );
};
