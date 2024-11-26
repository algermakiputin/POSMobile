import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';;
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { routes } from '@/app/types/routes';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function InventoryLayout() {
  const colorScheme = useColorScheme();

  return (
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
        <Stack.Screen 
          name={routes.newCategory}
          options={{ 
            headerShown: true,
            headerTitle: 'Add Category',
            headerTitleAlign:'center'
          }} 
          />
        <Stack.Screen 
          name={routes.newSupplier} 
          options={{ 
            headerShown: true,
            headerTitle: 'Add Supplier',
            headerTitleAlign:'center'
          }} 
          />
      </Stack>
    </ThemeProvider>
  );
}
