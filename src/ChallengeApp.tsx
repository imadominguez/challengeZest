import 'react-native-gesture-handler';

import {AppNavigator} from './presentation/navigator/AppNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeContextProvider} from './presentation/context/ThemeContext';

const queryClient = new QueryClient();
export const ChallengeApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <AppNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
