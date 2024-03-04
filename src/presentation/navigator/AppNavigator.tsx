import {TabNavigator} from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
