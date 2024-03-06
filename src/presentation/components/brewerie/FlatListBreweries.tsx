import {View, Text, FlatList} from 'react-native';
import {Brewerie} from '../../../domain/entities/breweries';
import {CardBrewerie} from './CardBrewerie';

interface Props {
  breweries: Brewerie[];
  style?: Record<string, string | number>;
  numColumns: number;
  ListEmptyComponent?: JSX.Element;
}

export const FlatListBreweries = ({
  breweries,
  style,
  numColumns,
  ListEmptyComponent,
}: Props) => {
  return (
    <FlatList
      data={breweries}
      style={style}
      keyExtractor={(brewerie: Brewerie) => brewerie.id}
      numColumns={numColumns}
      renderItem={({item}: any) => <CardBrewerie brewerie={item} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => ListEmptyComponent}
    />
  );
};
