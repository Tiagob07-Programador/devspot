import React from 'react';
import { Alert, Linking, StyleSheet, Switch, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppButton } from '../components/AppButton';
import { ProfileImage } from '../components/ProfileImage';
import { ScreenContainer } from '../screens/ScreenContainer';
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  HOME_TITLE_HIGHLIGHT,
  SOCIAL_LINKS,
  SocialLink,
} from '../data/profile';
import { RootStackParamList } from '../navigation/types';
import { fonts } from '../theme/fonts';
import { useTheme } from '../theme/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const { colors, isDark, toggleTheme } = useTheme();

  const handleContact = () => {
    Alert.alert('Entre em contato');
  };

  const handleSwitch = () => {
    toggleTheme();
    Alert.alert('Switch pressionado');
  };

  const openSocial = async (link: SocialLink) => {
    try {
      await Linking.openURL(link.url);
    } catch {
      Alert.alert('Erro', `Não foi possível abrir o ${link.label}.`);
    }
  };

  return (
    <ScreenContainer>
      <ProfileImage source={require('../../assets/perfil.jpeg')} />

      <Text style={[styles.title, { color: colors.text }]}>
        {HOME_TITLE}
        {'\n'}
        <Text style={{ color: colors.primary }}>{HOME_TITLE_HIGHLIGHT}</Text>
      </Text>

      <Text style={[styles.description, { color: colors.text }]}>{HOME_DESCRIPTION}</Text>

      <AppButton title="Sobre mim" onPress={() => navigation.navigate('About')} />
      <AppButton title="Entre em contato!" onPress={handleContact} />

      <Text style={[styles.sectionTitle, { color: colors.text }]}>Acesse minhas redes:</Text>

      <View style={styles.switchRow}>
        <Text style={[styles.switchLabel, { color: colors.text }]}>Alterar visualização</Text>
        <Switch
          value={!isDark}
          onValueChange={handleSwitch}
          trackColor={{ false: colors.primary, true: colors.primary }}
          ios_backgroundColor={colors.primary}
          thumbColor="#FFFFFF"
          accessibilityLabel="Alterar visualização"
        />
      </View>

      {SOCIAL_LINKS.map((link) => (
        <AppButton
          key={link.id}
          title={link.label}
          icon={link.icon}
          variant="outline"
          onPress={() => openSocial(link)}
        />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.heading,
    fontSize: 22,
    lineHeight: 32,
    marginBottom: 18,
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 28,
  },
  sectionTitle: {
    fontFamily: fonts.heading,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  switchLabel: {
    fontFamily: fonts.body,
    fontSize: 13,
  },
});