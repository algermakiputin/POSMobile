import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'; 
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen'; 
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function OrdersLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{headerShown: true}}>
        <Stack.Screen 
          name="index"
          options={{
            headerTitle: 'Order',
            headerTitleAlign: 'center'
          }}
          />
        <Stack.Screen
          name='summary'
          options={{
            headerTitle: 'Order Summary',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name='receipt'
          options={{
            headerTitle: 'Receipt',
            headerTitleAlign: 'center'
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
