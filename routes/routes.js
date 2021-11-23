//Importando Bibliotecas.
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Importando Icones
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

//Importando Telas.
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from "../screens/MapScreen";
import FavScreen from "../screens/FavScreen";
import ComentaScreen from "../screens/Comentarios";
import PerfilScreen from "../screens/PerfilUser"
import PostScreen from "../screens/PostScreen";
import Form from "../screens/Form";

//Importando Telas de Postos Gasolina Etec Zona Leste
import PostoIpiranga from "../PostoScreens/PostoIpirangaZL";
import PostoEstrela from "../PostoScreens/PostoEstrela";
import PostoParadise from "../PostoScreens/PostoParadise";
import PostoPetrobras from "../PostoScreens/PostoPetrobrasZL";
import NovaJerusalem from "../PostoScreens/NovaJerusalem";
import PenhaFuel from "../PostoScreens/PenhaFuel";
import ImperadorPosto from "../PostoScreens/PostoImperador";
import PostoSaoSevero from "../PostoScreens/PostoSaoSevero";
import ServicoBand from "../PostoScreens/ServiçoBandeira";
import PostoBiri from "../PostoScreens/PostoBiri";
import PostoLaguna from "../PostoScreens/AparecidaLaguna";
import AutoPostoMorada from "../PostoScreens/AutoPostoMoradadoSol";

// Importando Postos Eletricos 
import HotelTM from "../EletricoPostoScreen/Hotel";
import BMW from "../EletricoPostoScreen/BMW";
import CidadeSp from "../EletricoPostoScreen/CidadeSP";
import EsEletrico from "../EletricoPostoScreen/EstationEletrico";
import Lisboa from "../EletricoPostoScreen/IpirangaLisboa";
import PDcsc from "../EletricoPostoScreen/PorscheDCS";
import CarsPP from "../EletricoPostoScreen/PorscheEstC";
import Security from "../EletricoPostoScreen/PrtSeguro";
import Marcio from "../EletricoPostoScreen/StItaim";
import Volvo from "../EletricoPostoScreen/Volvo";
import VolvoCH from "../EletricoPostoScreen/VolvoCh";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const HomeTabs = () => {
    return (
        <Tab.Navigator 
        initialRouteName="HomeTab"
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#ff8c00',
            tabBarInactiveTintColor: 'lightgray',
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                elevation: 0,
                left: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                height: 60,
                backgroundColor: '#2e2e2e',
            }
        }}>
           <Tab.Screen 
            name="Home Screen"
            component={HomeScreen}
            options={{ 
                headerShown: false,
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-home" color={color} size={26} />
                )
            }}
            />
             <Tab.Screen 
            name="Postos"
            component={FavScreen}
            options={{ 
                headerShown: false,
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-document-text" color={color} size={26} />
                )
            }}
            />
             <Tab.Screen 
            name="Sugestões"
            component={ComentaScreen}
            options={{ 
                headerShown: false,
                tabBarIcon: ({color}) => (
                    <Ionicons name="chatbox-outline" color={color} size={26} />
                )
            }}
            />
        </Tab.Navigator>
    )
}


const Routes = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen 
           options={{ headerShown: false}}
           name="Onboarding" 
           component={OnboardingScreen}/>
          <Stack.Screen 
           options={{ headerShown: false}}
           name="Login" 
           component={LoginScreen}/>
          <Stack.Screen 
           options={{ headerShown: false}}
           name="Cadastro"
           component={CadastroScreen}/>
          <Stack.Screen 
           options={{ headerShown: false}}
           name="Home" 
           component={HomeTabs}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Formulario" 
           component={Form}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Mapa" 
           component={MapScreen}/>
          <Stack.Screen 
           options={{ headerShown: false}}
           name="Perfil" 
           component={PerfilScreen}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="PostoMorada" 
           component={AutoPostoMorada}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="PostoIpirangaZL" 
           component={PostoIpiranga}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="PostoEstrela" 
           component={PostoEstrela}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="PostoParadise" 
           component={PostoParadise}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Posto Petrobras" 
           component={PostoPetrobras}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Posto NovaJerusalem" 
           component={NovaJerusalem}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Penha-Fuel" 
           component={PenhaFuel}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Imperador" 
           component={ImperadorPosto}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Severo" 
           component={PostoSaoSevero}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Bandeira" 
           component={ServicoBand}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="PostoBiri" 
           component={PostoBiri}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Laguna" 
           component={PostoLaguna}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Hotel" 
           component={HotelTM}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="BMW" 
           component={BMW}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="SP" 
           component={CidadeSp}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="EsEle" 
           component={EsEletrico}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Lisb" 
           component={Lisboa}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="PCcsc" 
           component={PDcsc}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="PorschePP" 
           component={CarsPP}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Porto" 
           component={Security}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="March" 
           component={Marcio}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="Volv" 
           component={Volvo}/>
           <Stack.Screen 
           options={{ headerShown: false}}
           name="VolvCH" 
           component={VolvoCH}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routes;