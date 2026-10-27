import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type Props = {
  source: ImageSourcePropType;
};

export function ProfileImage({ source }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.frame, { borderColor: colors.border }]} />
      <Image source={source} style={styles.image} resizeMode="cover" accessibilityLabel="Foto de perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 6,
    marginBottom: 32,
  },
  frame: {
    position: 'absolute',
    top: -6,
    right: -6,
    left: 6,
    bottom: 6,
    borderWidth: 2,
    borderRadius: 18,
  },
  image: {
    width: '100%',
    aspectRatio: 1.3,
    maxHeight: 260,
    borderRadius: 16,
  },
});