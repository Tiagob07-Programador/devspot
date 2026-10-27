import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useTheme } from '../theme/ThemeContext';

type Props = {
  children: ReactNode;
  onLogoPress?: () => void;
};

export function ScreenContainer({ children, onLogoPress }: Props) {
  const { colors, isDark } = useTheme();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 450, useNativeDriver: true }).start();
  }, [opacity]);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top', 'left', 'right']}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.content, { opacity }]}>
          <View style={styles.inner}>
            <Header onPress={onLogoPress} />
            {children}
          </View>
        </Animated.View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },

  inner: {
    width: '100%',
    maxWidth: 480,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
});