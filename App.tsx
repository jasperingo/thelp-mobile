import React from 'react';
import { DefaultTheme, NavigationContainer, NavigatorScreenParams, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AuthScreen from './screens/AuthScreen';
import MainScreen, { MainTabParamList } from './screens/MainScreen';
import Colors from './assets/colors.json';

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.colorPrimary,
    card: Colors.colorPrimary,
    background: Colors.colorBackground,
    text: Colors.colorOnSurface
  }
};

export type RootStackParamList = {
  Auth: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
};

const Stack = createNativeStackNavigator();

const App = () => {

  const [fontLoaded] = useFonts({
    'RubikMoonrocks-Regular': require('./assets/fonts/RubikMoonrocks-Regular.ttf'),
  });

  if (!fontLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name="Auth" 
            component={AuthScreen} 
            />
          <Stack.Screen 
            name="Main" 
            component={MainScreen} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
