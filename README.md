# DEV.SPOT – App Expo + React Native

Trabalho prático desenvolvido com Expo + React Native (TypeScript), reproduzindo duas telas de um portfólio de desenvolvedor Front-end.

# Integrantes

- Tiago Bezerra
- João Lucas
- Valdir Dantas

# Descrição do app

O app possui duas telas com navegação em pilha (React Navigation):

- Home: logo, foto de perfil, título e descrição, botões "Sobre mim" (navega para a segunda tela) e "Entre em contato!" (Alert), seção "Acesse minhas redes" com GitHub, LinkedIn, Instagram e Twitch, e um Switch que exibe o Alert "Switch pressionado".
- Sobre mim: título, biografia e rodapé com créditos. O logo no topo leva de volta para a Home.

# Diferenciais implementados

- Alternância de tema claro/escuro 
- Animação  nas telas
- Links reais nas redes sociais

# Telas

<img width="739" height="1600" alt="1" src="https://github.com/user-attachments/assets/9ad7d829-78b9-4000-b4ad-d54ec6c50705" />
<img width="739" height="1600" alt="2" src="https://github.com/user-attachments/assets/efea4f0f-cc2d-46f5-9fe3-b929463005d6" />
<img width="739" height="1600" alt="3" src="https://github.com/user-attachments/assets/4e732c69-ee6e-4a1e-9d51-68804bc86871" />
<img width="739" height="1600" alt="6" src="https://github.com/user-attachments/assets/f9027140-fbce-481c-afe3-41618bc39b5d" />
<img width="739" height="1600" alt="4" src="https://github.com/user-attachments/assets/c9cb7d4f-c69e-48c0-b9ce-ecc8e19a02d4" />
<img width="739" height="1600" alt="5" src="https://github.com/user-attachments/assets/6e7006f0-3ab5-45c2-985b-a5c4a943da5a" />




# Estrutura do projeto


App.tsx
assets/            # imagens
prints/            # prints das telas
src/
  components/      # AppButton, Header, Footer, ProfileImage, ScreenContainer
  data/            # textos, créditos e links das redes (profile.ts)
  navigation/      # AppNavigator e tipos das rotas
  screens/         # HomeScreen e AboutScreen
  theme/           # cores, fontes e ThemeContext (claro/escuro)


# Como rodar o projeto

bash

# 1. instalar as dependências

npm install



# 2. iniciar o projeto

npx expo start





Abra no celular com o app Expo Go (QR code) ou pressione A (Android) / W (web) no terminal.



O projeto teve que ser desenvolvido em SDK 58 porque foi feito no iphone.


