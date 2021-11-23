import React from 'react';
import { View,Text,Button,StyleSheet,Image,SafeAreaView,TouchableOpacity} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const FavScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#272727'}}>
            <ScrollView>
            <View style={styles.Title}>
            <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff',fontWeight: "bold",marginTop:20}}>SUGESTÕES</Text>  
            <Ionicons name="chatbox" color='#ffffff' size={30} style={{marginLeft:10,marginTop:20}} />
            </View>
            <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <Image
             source={require('../assets/images/sugestao.png')}
              style={{width:300,height:300,marginTop: 80}} 
               />
            <Text 
            style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#ffffff',textAlign: 'center'}}>
            Adorariamos receber sugestões Sobre o nosso trabalho por isso 
            criamos um formulario para que voce possa relatar erros presentes no aplicativo como por exemplo: Preços Incorretos de postos 
            entre outros erros que possam aparecer.
            </Text>
            <Text 
            style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#ffffff',textAlign: 'center'}}>
            Agradecemos a  sua ajuda e juntos trabalhamos para um App Melhor.
            </Text>
            <Ionicons name="heart-circle-outline" color='#FF0000' size={50}/>  
            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Formulario')}>
             <Text style={styles.submitText}>Acessar Formulario</Text>
             </TouchableOpacity>
             </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FavScreen;

const styles = StyleSheet.create({
     Title: {
      backgroundColor:'#ff8c00',
       height: 70 ,
       borderBottomLeftRadius: 40,
        borderBottomRightRadius:40,
        flexDirection: 'row',
        justifyContent: 'center'
     },
     List:{
      backgroundColor:'#AEAEAE',
      height: 500 ,
      borderRadius: 60,
      marginTop: 50
     },
     btnSubmit: {
        backgroundColor: '#ff8c00',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      submitText: {
        color: '#FFF',
        fontSize: 18,
      },
});
