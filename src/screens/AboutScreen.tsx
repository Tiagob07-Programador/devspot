import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileImage } from '../components/ProfileImage';
import { ScreenContainer } from '../screens/ScreenContainer';
import { ABOUT_PARAGRAPHS, ABOUT_TITLE } from '../data/profile';
import { RootStackParamList } from '../navigation/types';
import { fonts } from '../theme/fonts';
import { useTheme } from '../theme/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export function AboutScreen({ navigation }: Props) {
  const { colors } = useTheme();

  return (
    <ScreenContainer onLogoPress={() => navigation.navigate('Home')}>
      <ProfileImage source={require('../../assets/perfil.jpeg')} />

      <Text style={[styles.title, { color: colors.text }]}>{ABOUT_TITLE}</Text>

      {ABOUT_PARAGRAPHS.map((paragraph, index) => (
        <Text key={index} style={[styles.paragraph, { color: colors.text }]}>
          {paragraph}
        </Text>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.heading,
    fontSize: 22,
    marginBottom: 20,
  },
  paragraph: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 26,
    marginBottom: 28,
  },
});