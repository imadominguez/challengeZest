import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {colors} from '../../../config/theme/global-theme';

interface Props {
  title: string;
  subtitle?: string;
}

export const HeaderScreen = ({title, subtitle}: Props) => {
  const {dark} = useTheme();
  return (
    <View
      style={{
        borderBottomWidth: 1.5,
        borderColor: dark ? colors.dark.bg_300 : colors.light.bg_300,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: dark ? colors.dark.bg_200 : colors.light.bg_300,
      }}>
      <Text
        variant="headlineMedium"
        style={{
          marginTop: 30,
          paddingBottom: 20,
          fontWeight: 'bold',
          color: dark ? colors.dark.text_100 : colors.light.text_100,
        }}>
        {title}
      </Text>
      {subtitle && (
        <Text
          variant="headlineSmall"
          style={{
            paddingBottom: 20,
            fontWeight: 'bold',
            color: dark ? colors.dark.text_100 : colors.light.text_100,
          }}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};
