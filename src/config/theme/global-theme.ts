import {StyleSheet} from 'react-native';
export const colors = {
  dark: {
    primary_100: '#FF5733',
    primary_200: '#ff8a5f',
    primary_300: '#fff3bf',
    accent_100: '#FFC300',
    accent_200: '#916600',
    text_100: '#FFFFFF',
    text_200: '#c0c0c0',
    bg_100: '#1C1C1C',
    bg_200: '#2b2b2b',
    bg_300: '#434343',
  },
  light: {
    primary_100: '#FF6600',
    primary_200: '#ff983f',
    primary_300: '#ffffa1',
    accent_100: '#F5F5F5',
    accent_200: '#929292',
    text_100: '#1d1f21',
    text_200: '#444648',
    bg_100: '#ffffff',
    bg_200: '#eaeaea',
    bg_300: '#cccccc',
  },
};

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
