import React from 'react';
import { View,Text,Button,StyleSheet,SafeAreaView,Image,TouchableOpacity} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const PostoLaguna = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#272727'}}>
        <ScrollView>
        <View style={styles.Title}>
        <Text style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#000000',fontWeight: "bold",marginTop:25}}>Senhora da Aparecida Laguna Auto Posto</Text>  
        <TouchableOpacity>
        <Ionicons name="heart-circle-outline" color='#FF0000' size={30} style={{marginLeft:10,marginTop:20}} />
        </TouchableOpacity>
        </View>
        <View>
        <Image source={require('../assets/imagesPosto/AparecidaLaguna.png')} style={{width:"100%",height:300,borderRadius: 40}} />
        </View>
        <View style={{backgroundColor:'#ff8c00'}}>
        </View>
        <View style={styles.List}> 
        <View style={styles.Endereco}>
        <Text style={{fontSize:14,fontFamily:'Roboto-Medium',color: '#203354',fontWeight: "bold",marginTop:10,marginLeft:5,marginLeft:10}}>Endereço: Rua Ponte Rasa, 226 - Jardim Pte. Rasa, São Paulo - SP, 03891-050</Text>  
        <View
            style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 2,
            marginTop: 20
            }}
            />
            <View style={{marginTop: 20,flexDirection: 'row'}}>
            <Image source={require('../assets/ImagensCombustiveis/Etanol.png')} style={{width:80,height:80,borderRadius:20, marginLeft:10}} />
            <Text style={styles.TextGas}>Etanol:</Text>  
            <Text style={styles.PrecosGas}>R$ 4.998</Text>
            </View>
            <View style={{flexDirection: 'row',marginTop: 20}}>
            <Image source={require('../assets/ImagensCombustiveis/Gasolina.png')} style={{width:80,height:80,borderRadius:20, marginLeft:10}} />
            <Text style={styles.TextGas}>Gasolina:</Text>
            <Text style={styles.PrecosGas}>R$ 6.092</Text>  
            </View>
            <View style={{flexDirection: 'row',marginTop: 20}}>
            <Image source={require('../assets/ImagensCombustiveis/DieselS10.png')} style={{width:80,height:80,borderRadius:20, marginLeft:10}} />
            <Text style={styles.TextGas}>Disel-S10:</Text>
            <Text style={styles.PrecosGas}>R$ 5.249</Text>
            </View>
            <View style={{flexDirection: 'row',marginTop: 20}}>
            <Image source={require('../assets/ImagensCombustiveis/GasolinaAditivada.png')} style={{width:80,height:80,borderRadius:20, marginLeft:10}} />
            <Text style={styles.TextGas}>Gasolina Aditivada:</Text>
            <Text style={styles.PrecosGas}>R$ 6.995</Text>
            </View>
            <View style={{marginTop: 20,alignItems: "center"}}>
            <Text style={styles.TextoInformativo}>Data da Ultima Atualização: Novembro de 2021</Text>
            </View>
            <View style={{marginTop: 20,alignItems: "center"}}>
            <Text style={styles.TextoInformativo}>O valor do combustivel pode ter passado por alterações desde a ultima verificação de preços feita pelo aplicativo</Text>
            </View>
            <View style={{marginTop: 20,alignItems: "center"}}>
            <Text style={styles.TextoInformativo}>O Wego drive não se responsabiliza pela diferença de valor exibido na data de apuração e a data efetiva da compra do produto no posto</Text>
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

export default PostoLaguna;

const styles = StyleSheet.create({
 Title: {
  backgroundColor:'#FFE800',
    height: 70 ,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50
 },
 List:{
  backgroundColor:'#ff781f',
  height: 900,
  borderRadius: 20,
 },
 Endereco:{
    marginTop: 20,
    backgroundColor:'#DEDEDE',
    height: 850,
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