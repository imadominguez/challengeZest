import {Card, Text, useTheme} from 'react-native-paper';
import {Brewerie} from '../../../domain/entities/breweries';
import {Pressable, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreenStackParamList} from '../../navigator/HomeStackNavigator';

interface Props {
  brewerie: Brewerie;
}

export const CardBrewerie = ({brewerie}: Props) => {
  const {name, brewery_type, country, city} = brewerie;
  const theme = useTheme();

  const navigation = useNavigation<NavigationProp<HomeScreenStackParamList>>();
  return (
    <Pressable
      style={{flex: 1}}
      onPress={() => navigation.navigate('Details', {brewerieId: brewerie.id})}>
      <Card style={styles.cardContinaer}>
        <Text>{name}</Text>
        <Text>{brewery_type}</Text>
        <Text>{country}</Text>
        <Text>{city}</Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContinaer: {
    flex: 1,
    marginBottom: 25,
  },
});
