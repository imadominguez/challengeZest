import {SearchScreen} from '../screens/search/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import {HomeStackNavigator} from './HomeStackNavigator';
import {FavoritesScreen} from '../screens/favorites/FavoritesScreen';
import {useTheme} from 'react-native-paper';
import {SearchStackNavigator} from './SearchStackNavigator';
import {FavoritesStackNavigator} from './FavoriteStackNavigator';
import {CitiesScreen} from '../screens/cities/CitiesScreen';

export type RootTabParamList = {
  Home: undefined;
  Favorite: undefined;
  Search: undefined;
  Cities: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
  const {dark} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarStyle: {
          backgroundColor: dark ? '#1e1e1e' : '#ffffff',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarActiveBackgroundColor: dark ? '#141414' : '#2a2a2a',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cities"
        component={CitiesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="navigate-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
