import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function InventoryLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="InventoryHomePage" 
          options={{ 
            headerShown: true,
            headerTitle: 'Inventory',
            headerTitleAlign:'center'
          }} 
          />
        <Stack.Screen 
          name="NewItem" 
          options={{ 
            headerShown: true,
            headerTitle: 'New Item',
            headerTitleAlign:'center'
          }} 
          />
        <Stack.Screen 
          name="category/NewCategory" 
          options={{ 
            headerShown: true,
            headerTitle: 'Add Category',
            headerTitleAlign:'center'
          }} 
          />
        <Stack.Screen 
          name="supplier/NewSupplier" 
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