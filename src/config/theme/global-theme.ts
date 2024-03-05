import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

export const globalTheme = StyleSheet.create({
  globalMargin: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
