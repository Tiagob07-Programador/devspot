import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconName } from '../data/profile';
import { fonts } from '../theme/fonts';
import { useTheme } from '../theme/ThemeContext';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'filled' | 'outline';
  icon?: IconName;
};

export function AppButton({ title, onPress, variant = 'filled', icon }: Props) {
  const { colors } = useTheme();
  const filled = variant === 'filled';
  const contentColor = filled ? colors.onPrimary : colors.text;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [
        styles.button,
        filled
          ? { backgroundColor: colors.primary }
          : { borderColor: colors.border, borderWidth: 1.5 },
        pressed && styles.pressed,
      ]}
    >
      {icon ? (
        <Ionicons name={icon} size={24} color={colors.primary} style={styles.icon} />
      ) : null}
      <Text style={[styles.title, { color: contentColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 52,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontFamily: fonts.bodyBold,
    fontSize: 15,
  },
});