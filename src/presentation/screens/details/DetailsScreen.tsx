import {useContext} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useQuery} from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {getBrewerieById} from '../../../actions/breweries/get-brewerie-by-id';
import {HomeScreenStackParamList} from '../../navigator/HomeStackNavigator';
import {ScreenLoader} from '../../components/loaders/ScreenLoader';
import {colors, globalTheme} from '../../../config/theme/global-theme';
import {ThemeContext} from '../../context/ThemeContext';
import {typeBrewerie} from '../../../lib/data';

interface Props extends StackScreenProps<HomeScreenStackParamList, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {isDark} = useContext(ThemeContext);
  const {height} = useWindowDimensions();
  const {brewerieId} = route.params;

  const {isLoading, data: brewerie} = useQuery({
    queryKey: ['brewerie'],
    queryFn: () => getBrewerieById(brewerieId),
  });

  if (isLoading) {
    return <ScreenLoader />;
  }
  const {
    brewery_type,
    address_1,
    city,
    imageDetails,
    name,
    phone,
    postal_code,
    province,
    state,
    street,
    url,
    country,
  } = brewerie!;
  return (
    <ScrollView>
      <View
        style={{
          overflow: 'hidden',
        }}>
        <FlatList
          data={imageDetails}
          keyExtractor={(image, index) => image + `${index}`}
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              style={{height: height * 0.6, width: 500}}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{...globalTheme.globalMargin}}>
        <Text
          variant="displayMedium"
          numberOfLines={1}
          style={{
            ...globalTheme.title,
            marginTop: 10,
            marginBottom: 10,
          }}>
          {name}
        </Text>

        <Text
          variant="headlineSmall"
          style={{
            opacity: 0.7,
          }}>
          <Icon name="earth-outline" size={16} /> {country} - {state}
        </Text>

        <Text
          variant="headlineSmall"
          style={{
            opacity: 0.7,
          }}>
          <Icon name="pin-outline" size={16} /> {city} - {postal_code}
        </Text>

        {/* Address */}
        {address_1 && <Text>Dirección: {address_1}</Text>}

        {/* Brewerie type */}
        {brewery_type && (
          <View
            style={{
              backgroundColor: isDark
                ? colors.dark.bg_200
                : colors.light.bg_200,
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
            }}>
            <Text variant="titleLarge">
              Crevecería de tipo: {brewerie!.brewery_type}
            </Text>

            <Text variant="titleSmall">
              {typeBrewerie[brewerie!.brewery_type].description}
            </Text>
          </View>
        )}

        {/* Phone */}
        {phone && (
          <View style={styles.chip}>
            <Text variant="titleMedium" style={styles.textChip}>
              <Icon name="call-outline" size={16} /> Teléfono: {phone}
            </Text>
          </View>
        )}

        {/* Url */}
        {url && (
          <View style={styles.chip}>
            <Text variant="titleMedium" style={styles.textChip}>
              <Icon name="link-outline" size={16} /> Sitio web: {url}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderColor: colors.dark.accent_100,
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: colors.dark.accent_200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  textChip: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
