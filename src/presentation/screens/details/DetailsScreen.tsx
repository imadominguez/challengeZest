import {FlatList, Image, View, useWindowDimensions} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreenStackParamList} from '../../navigator/HomeStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useQuery} from '@tanstack/react-query';
import {getBrewerieById} from '../../../actions/breweries/get-brewerie-by-id';
import {ScreenLoader} from '../../components/loaders/ScreenLoader';
import {globalTheme} from '../../../config/theme/global-theme';

interface Props extends StackScreenProps<HomeScreenStackParamList, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {height} = useWindowDimensions();
  const {brewerieId} = route.params;
  const navigation = useNavigation<NavigationProp<HomeScreenStackParamList>>();

  const {isLoading, data: brewerie} = useQuery({
    queryKey: ['brewerie'],
    queryFn: () => getBrewerieById(brewerieId),
  });

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <View>
      <View
        style={{
          borderBottomStartRadius: 30,
          borderBottomEndRadius: 30,
          overflow: 'hidden',
        }}>
        <FlatList
          data={brewerie!.imageDetails}
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
            marginTop: 10,
            marginBottom: 10,
          }}>
          {brewerie!.name}
        </Text>

        <Text>
          {brewerie?.country} - {brewerie?.state} - {brewerie?.city} -{' '}
          {brewerie?.postal_code}
        </Text>

        <Text>{brewerie?.address_1}</Text>

        <Text>{brewerie?.brewery_type}</Text>

        <Text>{brewerie?.phone}</Text>

        <Text>{brewerie?.url}</Text>
      </View>
    </View>
  );
};
