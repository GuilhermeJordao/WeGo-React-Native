import React from 'react';
import { View,Text,Button,StyleSheet,SafeAreaView,ScrollView, ImageBackground,Image,TextInput,TouchableOpacity,useState } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import YoutubePlayer from "react-native-youtube-iframe";
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../model/data';
import { windowWidth } from '../utils/Dimensions';
import { auth, db } from '../config/firebase';





const renderBanner = ({item, index}) => {
  return <BannerSlider data={item} />;
};



const HomeScreen = ({navigation}) => {
    return (
     <SafeAreaView style={{flex:1,backgroundColor:'#272727'}} >
       <ScrollView style={{padding:20}}>
         <View style={{flexDirection: 'row',justifyContent:'space-between',marginBottom:20,}}>
          <Text style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#ffffff',marginTop: 4}}>Olá</Text>
          <Text style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#FF9900',marginTop: 5,marginRight: 170}}>Novo Usuario(a)</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Text style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#FF9900',marginTop: 5,marginRight: 170}}>illustrations by Storyset</Text>
           <ImageBackground 
            source={require('../assets/images/GirlProfileTest.png')}
              style={{width:35,height:35}} 
               imageStyle={{borderRadius:25}}/>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 15,flexDirection:'row'}}>
          <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff'}}>Seja Bem Vindo(a)</Text>
          </View>
          <View style={{marginTop: 12}}>
          <Image
              source={require('../assets/images/Bannerhome.png')}
              style={{width:350,height:200,borderRadius:15}} />
          </View>
          <View style={{marginVertical: 15,flexDirection:'row'}}>
              <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff'}}>Funções Principais:</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent:'space-between',marginBottom:20,}}>
            <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
            <Image
             source={require('../assets/imagesCarrousel/Mapas.png')}
              style={{width:100,height:150,borderRadius: 15}} 
               />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Postos')}>
            <Image
             source={require('../assets/imagesCarrousel/PostList.png')}
             style={{width:100,height:150,borderRadius: 15}} 
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sugestões')}>
            <Image
             source={require('../assets/imagesCarrousel/Sugestao.png')}
             style={{width:100,height:150,borderRadius: 15}}  
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 15,flexDirection:'row'}}>
          <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff'}}>Informações sobre o Projeto:</Text>
          </View>
          <View style={{marginTop: 12}}>
          <YoutubePlayer
           height={300}
           play={false}
           videoId={"kKr8nXHwSYU"}
         />
        </View>
       </ScrollView>
     </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
     container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
     },
});