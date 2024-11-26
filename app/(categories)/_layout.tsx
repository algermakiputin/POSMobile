import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Fragment, useEffect } from 'react';
import 'react-native-reanimated';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function CategoriesLayout() { 

  return (
    <Fragment> 
      <Stack>
        <Stack.Screen name="Categories" options={{ 
            headerShown: false, 
            headerTitle: 'Categories', 
            title: 'Categories qweqwe',
            headerBackTitle: 'back now men',
            headerTitleAlign: 'center'
            }} />
        <Stack.Screen name="NewCategory" options={{ 
            headerShown: false, 
            headerTitle: 'Categories', 
            title: 'Categories qweqwe',
            headerBackTitle: 'back now men',
            headerTitleAlign: 'center'
            }} />
      </Stack> 
    </Fragment>
  );
}
