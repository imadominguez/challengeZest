import {useContext} from 'react';
import {Button, Text} from 'react-native-paper';
import {ThemeContext} from '../../../context/ThemeContext';
import {colors} from '../../../../config/theme/global-theme';

interface Props {
  paginationButtons: number[];
  onPress: (button: number) => void;
  page: number;
}

export const ButtonsPaginated = ({page, paginationButtons, onPress}: Props) => {
  const {isDark} = useContext(ThemeContext);

  return (
    <>
      {paginationButtons.map(pageNumber => (
        <Button
          key={pageNumber}
          onPress={() => onPress(pageNumber)}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor:
              page === pageNumber && isDark
                ? colors.dark.primary_100
                : page !== pageNumber && isDark
                ? colors.dark.bg_300
                : page === pageNumber && !isDark
                ? colors.light.primary_100
                : page !== pageNumber && !isDark
                ? colors.light.bg_200
                : colors.dark.bg_200,
          }}>
          <Text>{pageNumber + 1}</Text>
        </Button>
      ))}
    </>
  );
};
