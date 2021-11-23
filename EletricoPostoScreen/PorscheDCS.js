import React from 'react';
import { View,Text,Button,StyleSheet,SafeAreaView,Image,TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const PDcsc = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#272727'}}>
        <ScrollView>
        <View style={styles.Title}>
        <Text style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#000000',fontWeight: "bold",marginTop:25}}>Porsche Destination Charging Station</Text>  
        <TouchableOpacity>
        <Ionicons name="heart-circle-outline" color='#FF0000' size={30} style={{marginLeft:10,marginTop:20}} />
        </TouchableOpacity>
        </View>
        <View>
        <Image source={require('../assets/imagesPosto/Porch.png')} style={{width:"100%",height:300,borderRadius: 40}} />
        </View>
        <View style={{backgroundColor:'#ff8c00'}}>
        </View>
        <View style={styles.List}> 
        <View style={styles.Endereco}>
        <Text style={{fontSize:14,fontFamily:'Roboto-Medium',color: '#203354',fontWeight: "bold",marginTop:10,marginLeft:5,marginLeft:10}}>Endereço: Av. Brg. Faria Lima, 2230 - Jardim Paulistano, São Paulo - SP, 01451-000</Text>  
        <View
            style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 2,
            marginTop: 20
            }}
            />
            <View style={{flexDirection: 'row',marginTop: 20}}>
            <Image source={require('../assets/ImagensCombustiveis/Eletrico.png')} style={{width:80,height:80,borderRadius:20, marginLeft:10}} />
            <Text style={styles.TextGas}>Posto Elétrico Verificado</Text>
            </View>
            <View style={{marginTop: 20,alignItems: "center"}}>
            <Text style={styles.TextoInformativo}>Data da Ultima Atualização: Novembro de 2021</Text>
            </View>
            <View style={{marginTop: 20,alignItems: "center"}}>
            <Text style={styles.TextoInformativo}>O Wego drive não se responsabiliza pela mudança ou Fechamento do local exibido na data de apuração e a data efetiva de chagada ao local</Text>
            </View>
            <View
            style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 2,
            marginTop: 20
            }}
            />
        </View> 
        </View>
        </ScrollView>
    </SafeAreaView>
)
}

export default PDcsc;

const styles = StyleSheet.create({
 Title: {
  backgroundColor:'#00e600',
    height: 70 ,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50
 },
 List:{
  backgroundColor:'#0398dc',
  height: 500,
  borderRadius: 20,
 },
 Endereco:{
    marginTop: 20,
    backgroundColor:'#DEDEDE',
    height: 450,
    borderRadius: 22,
 },
 TextGas:{
    fontSize:20,fontFamily:'Roboto-Medium',
    color: '#203354',
    fontWeight: "bold",
    marginTop:20,
    marginLeft:5
 },
 PrecosGas:{
    fontSize:20,fontFamily:'Roboto-Medium',
    color: '#000000',
    fontWeight: "bold",
    marginTop:20,
    marginLeft:5
 },
 TextoInformativo:{
    fontSize:15,
    fontFamily:'Roboto-Medium',
    color: '#203354',
    fontWeight: "bold",
    marginTop:20,
    marginLeft:5,
    textAlign: 'center',
 }
});