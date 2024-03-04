import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreenStackParamList} from '../../navigator/HomeStackNavigator';

export const DetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeScreenStackParamList>>();

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('HomeScreen')}>
        Volver al home
      </Button>
    </View>
  );
};
