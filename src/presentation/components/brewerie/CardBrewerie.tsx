import {Button, Card, Text, useTheme} from 'react-native-paper';
import {Brewerie} from '../../../domain/entities/breweries';
import {Pressable, StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreenStackParamList} from '../../navigator/HomeStackNavigator';
import {useBrewerieStore} from '../../store/breweries/favorites-breweries.store';

import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../config/theme/global-theme';
import {ButtonFavoriteBrewerie} from './ButtonFavoriteBrewerie';
interface Props {
  brewerie: Brewerie;
}

export const CardBrewerie = ({brewerie}: Props) => {
  const {dark} = useTheme();
  const {name, brewery_type, country, city, image} = brewerie;

  const navigation = useNavigation<NavigationProp<HomeScreenStackParamList>>();
  return (
    <Pressable
      style={{
        flex: 1,
        marginVertical: 20,
        backgroundColor: dark ? colors.dark.bg_200 : colors.light.bg_200,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: dark ? colors.dark.bg_300 : colors.light.bg_300,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,

        elevation: 8,
      }}
      onPress={() => navigation.navigate('Details', {brewerieId: brewerie.id})}>
      <View style={{}}>
        <Card.Cover
          source={{
            uri: image,
          }}
          style={{
            borderRadius: 0,
            height: 140,
          }}
        />
        <View
          style={{
            padding: 10,
          }}>
          <Text
            variant="titleLarge"
            style={{
              marginBottom: 5,
              color: dark ? colors.dark.primary_100 : colors.light.primary_100,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text
            variant="bodyMedium"
            style={{
              color: dark ? colors.dark.text_200 : colors.light.text_200,
              fontWeight: '600',
              opacity: 0.8,
            }}>
            <Icon name="earth-outline" size={14} /> {country} - {city}
          </Text>
          <ButtonFavoriteBrewerie brewerie={brewerie} />
        </View>
      </View>
    </Pressable>
  );
};
