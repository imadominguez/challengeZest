import {SearchScreen} from '../screens/search/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from '../screens/home/HomeScreen';
import {HomeStackNavigator} from './HomeStackNavigator';

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // tabBarOptions={{
      //   activeTintColor: COLORS.primary,
      //   inactiveTintColor: COLORS.gray,
      // }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        // tabBarInactiveTintColor: 'gray',
        // tabBarStyle: {
        //   backgroundColor: 'white',
        // },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        // tabBarIconStyle: {
        //   width: 20,
        //   height: 20,
        // },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        // tabBarShowLabel: true,
        // tabBarActiveBackgroundColor: 'white',
        // tabBarInactiveBackgroundColor: 'white',
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
        component={SearchScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
