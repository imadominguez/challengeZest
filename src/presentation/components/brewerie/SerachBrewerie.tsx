import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors, globalTheme} from '../../../config/theme/global-theme';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  term: string;
  setTerm: (value: string) => void;
  placeholder: string;
}

export const SearchBrewerie = ({term, setTerm, placeholder}: Props) => {
  const {isDark} = useContext(ThemeContext);
  return (
    <View style={{...globalTheme.globalMargin}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={isDark ? '#fff' : '#4b4b4b'}
        mode="flat"
        autoFocus
        autoCorrect={false}
        value={term}
        onChangeText={setTerm}
        style={{
          backgroundColor: isDark ? colors.dark.bg_200 : colors.light.bg_200,
        }}
      />
      <Icon
        name="search"
        size={22}
        style={{
          position: 'absolute',
          right: 40,
          top: 15,
          color: isDark ? '#fff' : '#4b4b4b',
          zIndex: 999,
        }}
      />
    </View>
  );
};
