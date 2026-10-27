import { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const APP_NAME = 'DEV.SPOT';


export const HOME_TITLE = 'Eleve seu negócio digital a outro nível';
export const HOME_TITLE_HIGHLIGHT = 'com um Front-end de qualidade!';
export const HOME_DESCRIPTION =
  'Olá! Sou Tiago Silva, desenvolvedor Front-end com especialidade em React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?';

export const ABOUT_TITLE = 'Sobre mim';
export const ABOUT_PARAGRAPHS = [
  'Sou o Tiago Silva, desenvolvedor Front-end apaixonado por transformar ideias em interfaces funcionais, acessíveis e bem pensadas. Trabalho principalmente com React, HTML e CSS, criando experiências digitais que não só funcionam bem, mas também fazem sentido para quem usa.',
  'Gosto de colaborar de perto com pequenos negócios, designers e times criativos, ajudando a tirar projetos do papel e levá-los para a web de forma prática e eficiente. Acredito que um bom produto nasce do equilíbrio entre código bem escrito, atenção aos detalhes e uma comunicação clara ao longo de todo o processo.',
  'Estou sempre buscando evoluir, aprender novas tecnologias e aprimorar minhas soluções, seja otimizando performance, melhorando a usabilidade ou explorando novas formas de construir interfaces mais escaláveis. Se você tem uma ideia e quer transformá-la em algo real, vamos conversar.',
];

export type IconName = ComponentProps<typeof Ionicons>['name'];

export type SocialLink = {
  id: string;
  label: string;
  icon: IconName;
  url: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'github', label: 'GitHub', icon: 'logo-github', url: 'https://github.com/Tiagob07-Programador' },
  { id: 'linkedin', label: 'Linkedin', icon: 'logo-linkedin', url: 'https://www.linkedin.com/in/tiago-bezerra-629b34378?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { id: 'instagram', label: 'Instagram', icon: 'logo-instagram', url: 'https://www.instagram.com/tiagob07/' },
  { id: 'twitch', label: 'Twitch', icon: 'logo-twitch', url: 'https://www.twitch.tv/cabrinha_07' },
];
export const CREDITS = 'Desenvolvido por Tiago Bezerra, João Lucas e Valdir Dantas.';
export const CREDITS_NOTE = 'Projeto fictício sem fins comerciais.';
