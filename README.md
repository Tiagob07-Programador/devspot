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

<img width="739" height="1600" alt="5" src="https://github.com/user-attachments/assets/ac16a26b-2614-4097-b607-e6beeaf28e56" />
<img width="739" height="1600" alt="4" src="https://github.com/user-attachments/assets/bb67e6b9-442a-48a6-8c3d-5a9336cec1e6" />
<img width="739" height="1600" alt="3" src="https://github.com/user-attachments/assets/5dd6f9c8-f1d8-4866-a137-f09dacf069bb" />
<img width="739" height="1600" alt="2" src="https://github.com/user-attachments/assets/8e3a8ef0-35b9-4267-89fb-8443051e9d36" />
<img width="739" height="1600" alt="1" src="https://github.com/user-attachments/assets/82ba077e-6d32-450f-bb63-b4b3c8320327" />
<img width="739" height="1600" alt="6" src="https://github.com/user-attachments/assets/bb931192-ea41-4823-ad8a-74c5f91d9731" />


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


