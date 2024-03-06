import {View, Text} from 'react-native';
import {Brewerie} from '../../../domain/entities/breweries';
import {useBrewerieStore} from '../../store/breweries/favorites-breweries.store';
import {Button, useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../config/theme/global-theme';

interface Props {
  brewerie: Brewerie;
}

export const ButtonFavoriteBrewerie = ({brewerie}: Props) => {
  const {dark} = useTheme();

  const breweries = useBrewerieStore(state => state.breweries);
  const updateBrewerie = useBrewerieStore(state => state.updateBrewerie);

  const isFavorite = breweries.some(b => b.id === brewerie.id);
  return (
    <Button
      icon={() => (
        <Icon
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={20}
          color={
            isFavorite && dark
              ? colors.dark.text_100
              : !isFavorite && dark
              ? colors.dark.text_100
              : isFavorite && !dark
              ? colors.light.text_100
              : colors.light.text_100
          }
        />
      )}
      mode="outlined"
      textColor={
        isFavorite && dark
          ? colors.dark.text_100
          : !isFavorite && dark
          ? colors.dark.text_100
          : isFavorite && !dark
          ? colors.light.text_100
          : colors.light.text_100
      }
      onPress={() => updateBrewerie(brewerie)}
      style={{
        alignSelf: 'flex-end',
        backgroundColor:
          isFavorite && dark
            ? colors.dark.primary_100
            : !isFavorite && dark
            ? colors.dark.bg_300
            : isFavorite && !dark
            ? colors.light.primary_200
            : colors.light.bg_300,
      }}>
      <Text>Favorito</Text>
    </Button>
  );
};
