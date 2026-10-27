import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CREDITS, CREDITS_NOTE } from '../data/profile';
import { fonts } from '../theme/fonts';
import { useTheme } from '../theme/ThemeContext';

export function Footer() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.footerBackground }]}>
      <Text style={[styles.text, { color: colors.footerText }]}>{CREDITS}</Text>
      <Text style={[styles.text, { color: colors.footerText }]}>{CREDITS_NOTE}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.body,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
  },
});