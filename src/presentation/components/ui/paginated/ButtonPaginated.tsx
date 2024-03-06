import {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {ThemeContext} from '../../../context/ThemeContext';
import {colors} from '../../../../config/theme/global-theme';

interface Props {
  text: string;
  onPress: () => void;
}

export const ButtonPaginated = ({onPress, text}: Props) => {
  const {isDark} = useContext(ThemeContext);
  return (
    <Button
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderRadius: 100,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: isDark ? colors.dark.bg_200 : colors.light.bg_200,
      }}>
      <Text> {text} </Text>
    </Button>
  );
};
