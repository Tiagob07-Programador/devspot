import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from '../screens/AboutScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { useTheme } from '../theme/ThemeContext';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  const { isDark, colors } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={{ ...base, colors: { ...base.colors, background: colors.background } }}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}