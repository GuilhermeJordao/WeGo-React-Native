import React from 'react';
import { View,Text,Button,StyleSheet,Image,TouchableOpacity, Touchable } from "react-native";

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({ ... props }) => (
   <Button 
   style={styles.button}
   title='Pular'
   color="#FF9900" 
   { ... props }
   />
);

const Next = ({ ... props }) => (
  <Button 
  style={styles.button}
  title='Próximo'
  color="#FF9900" 
  { ... props }
  />
);

const Done = ({ ... props }) => (
  <TouchableOpacity
     color="#FF9900" 
     style={{marginHorizontal:10 }}
     { ... props }
     >
      <Text style={{fontSize:20, color:"#FF9900", fontWeight: "bold"}}>Iniciar</Text>
   </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
      <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#3AB43A',
      image: <Image source={require('../assets/images/Onboard1.png')} />,
      title: 'Seja Bem Vindo(a)',
      subtitle: 'O WeGo Drive é um aplicativo feito para facilitar a vida dos motoristas na hora de abastecer o seu veiculo',
    },
    {
      backgroundColor: '#2EC3B2',
      image: <Image source={require('../assets/images/Onboard2.png')} />,
      title: 'Criando Algo Maior',
      subtitle: 'Visamos criar um App que mostra 23 Postos Elétricos e de Gasolina selecionados nos locais próximos a Etec Zona Leste e Jardims',
    },
    {
      backgroundColor: '#D837C8',
      image: <Image source={require('../assets/images/Onboard3.png')} />,
      title: 'Criatividade',
      subtitle: 'Pensamos em um Aplicativo que agilize a vida do usuario a encontrar os Informações sobre o Preço da Gasolina e combater a desinformação e ajudar com a economia do usario',
    },
    {
      backgroundColor: '#5E2EC3',
      image: <Image source={require('../assets/images/Onboard4.png')} />,
      title: 'Vamos Começar',
      subtitle: 'Para Começar vamos fazer o seu Login para Que voce tenha acesso ao Aplicativo Esperamos que gostem',
    },
  ]}
/>
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
     container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
     },

     button: {
      borderRadius: 10
     },
});
