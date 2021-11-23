import React from 'react';
import { View,Text,Button,StyleSheet,SafeAreaView,Image, Touchable } from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const FavScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#272727'}}>
            <ScrollView>
            <View style={styles.Title}>
            <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff',fontWeight: "bold",marginTop:20}}>Postos Listados</Text>  
            <Ionicons name="ios-document-text" color='#ffffff' size={30} style={{marginLeft:10,marginTop:20}} />
            </View>
            <View style={{backgroundColor:'#ff8c00'}}>
            </View>
            <View style={styles.List}>
            <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff',marginLeft: 10}}>Postos de combustivel:</Text>
            <View style={{marginTop: 10}}>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('PostoIpirangaZL')}>
             <Text style={styles.submitText}>Posto Ipiranga Av.Aguia de Haia</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('PostoMorada')}>
             <Text style={styles.submitText}>Auto Posto Morada do Sol </Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('PostoBiri')}>
             <Text style={styles.submitText}>Auto Posto Biri</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Imperador')}>
             <Text style={styles.submitText}>Auto Posto Casa Nova da Imperador</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Laguna')}>
             <Text style={styles.submitText}>Senhora da Aparecida Laguna Auto Posto</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Severo')}>
             <Text style={styles.submitText}>Posto de combustíveis São Severo</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('PostoEstrela')}>
             <Text style={styles.submitText}>Auto Posto Estrela do Icarai</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Posto NovaJerusalem')}>
             <Text style={styles.submitText}>Posto de Serviços Nova Jerusalém</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Penha-Fuel')}>
             <Text style={styles.submitText}>Auto Posto Penha-Fuel</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Posto Petrobras')}>
             <Text style={styles.submitText}>Posto Petrobras Av. Antônio Estevão de Carvalho</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('PostoParadise')}>
             <Text style={styles.submitText}>Auto Posto Paradise</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Bandeira')}>
             <Text style={styles.submitText}>Posto de Serviços Bandeira</Text>
             </TouchableOpacity>
             </View>
             <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff',marginLeft: 10,marginTop: 20}}>Postos Elétricos:</Text>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('PorschePP')}>
             <Text style={styles.submitTextEL}>Porsche Estação de Carregamento</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('March')}>
             <Text style={styles.submitTextEL}>Eletroposto Supermercado St. Marche Itaim</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Porto')}>
             <Text style={styles.submitTextEL}>Eletroposto Centro Automotivo Porto Seguro</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('VolvCH')}>
             <Text style={styles.submitTextEL}>Eletroposto Volvo Charging Station</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('EsEle')}>
             <Text style={styles.submitTextEL}>Estação de carregamento para veículos elétricos</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Lisb')}>
             <Text style={styles.submitTextEL}>Eletroposto Posto Ipiranga - Lisboa</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Volv')}>
             <Text style={styles.submitTextEL}>Eletroposto Volvo</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('BMW')}>
             <Text style={styles.submitTextEL}>Eletroposto Autostar BMW</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('PCcsc')}>
             <Text style={styles.submitTextEL}>Porsche Destination Charging Station</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('SP')}>
             <Text style={styles.submitTextEL}>Eletroposto Shopping Cidade São Paulo</Text>
             </TouchableOpacity>
             </View>
             <View style={{marginTop: 10}}>
             <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Hotel')}>
             <Text style={styles.submitTextEL}>Eletroposto Hotel Tivoli Mofarrej</Text>
             </TouchableOpacity>
             </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FavScreen;

const styles = StyleSheet.create({
     Title: {
      backgroundColor:'#51A5BA',
       height: 70 ,
       borderBottomLeftRadius: 40,
        borderBottomRightRadius:40,
        flexDirection: 'row',
        justifyContent: 'center'
     },
     List:{
      backgroundColor:'#51A5BA',
      height: 2240 ,
      borderRadius: 50,
      marginTop: 50,
      justifyContent: 'center',
     },
     btnSubmit: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      submitText: {
        fontFamily:'Roboto-Medium',
        color: '#203354',
        fontSize: 18,
      },
      submitTextEL: {
        fontFamily:'Roboto-Medium',
        color: '#228B22',
        fontSize: 18,
      },
});
