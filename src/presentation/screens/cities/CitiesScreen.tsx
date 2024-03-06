import {useQuery} from '@tanstack/react-query';
import {View, Text, FlatList, Pressable} from 'react-native';
import {getCities} from '../../../actions/cities/get-cities';
import {ScreenLoader} from '../../components/loaders/ScreenLoader';
import {SearchBar} from 'react-native-screens';
import {HeaderScreen} from '../../components/ui/HeaderScreen';
import {useState} from 'react';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';

export const CitiesScreen = () => {
  const [city, setCity] = useState('');

  const debounceValue = useDebouncedValue(city, 100);

  const {isLoading, data: cities} = useQuery({
    queryKey: ['cities'],
    queryFn: () => getCities(),
  });

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <View>
      <HeaderScreen text="Busca por ciudad" />
      <FlatList
        data={cities}
        renderItem={({item}) => (
          <Pressable
            onPress={() => console.log(item.name)}
            style={{
              backgroundColor: 'red',
              width: 100,
              height: 50,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              overflow: 'hidden',
              opacity: 0.9,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <Text>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={item => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
