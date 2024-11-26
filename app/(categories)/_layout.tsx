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
          headerTitle: "Categories"
        }} />
        <Stack.Screen name="NewCategory" options={{ 
            headerTitle: 'New Category',  
            }} />
      </Stack> 
    </Fragment>
  );
}
