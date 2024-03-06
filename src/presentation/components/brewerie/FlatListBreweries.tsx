import {View, Text, FlatList} from 'react-native';
import {Brewerie} from '../../../domain/entities/breweries';
import {CardBrewerie} from './CardBrewerie';
import {globalTheme} from '../../../config/theme/global-theme';

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
    <View style={globalTheme.globalMargin}>
      <FlatList
        data={breweries}
        style={style}
        keyExtractor={(brewerie: Brewerie) => brewerie.id}
        numColumns={numColumns}
        renderItem={({item}: any) => <CardBrewerie brewerie={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => ListEmptyComponent}
      />
    </View>
  );
};
