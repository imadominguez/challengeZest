import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {HomeScreenStackParamList} from '../../navigator/HomeStackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeScreenStackParamList>>();
  return (
    <View>
      <Text>HomeScreen</Text>

      <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Ir a detalle
      </Button>
    </View>
  );
};
