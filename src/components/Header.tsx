import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { APP_NAME } from '../data/profile';
import { fonts } from '../theme/fonts';
import { useTheme } from '../theme/ThemeContext';

type Props = {
  onPress?: () => void;
};

export function Header({ onPress }: Props) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={styles.container}
      accessibilityRole={onPress ? 'button' : 'header'}
      accessibilityLabel={APP_NAME}
    >
      <Text style={[styles.logo, { color: colors.text }]}>{APP_NAME}</Text>
      <MaterialCommunityIcons
        name="star-four-points-outline"
        size={46}
        color={colors.primary}
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 28,
  },
  logo: {
    fontFamily: fonts.heading,
    fontSize: 18,
    letterSpacing: 0.5,
  },
  icon: {
    marginLeft: 2,
    marginTop: 8,
  },
});