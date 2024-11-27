import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';;
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { routes } from '@/app/types/routes';
import { MenuProvider } from 'react-native-popup-menu';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function InventoryLayout() {
  const colorScheme = useColorScheme();

  return (
    <MenuProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen 
            name={routes.inventory} 
            options={{ 
              headerShown: true,
              headerTitle: 'Inventory',
              headerTitleAlign:'center'
            }} 
            />
          <Stack.Screen 
            name={routes.newItem}
            options={{ 
              headerShown: true,
              headerTitle: 'New Item',
              headerTitleAlign:'center'
            }} 
            /> 
        </Stack>
      </ThemeProvider>
    </MenuProvider>
  );
}
