import React from 'react';
import { View,Text,Button,StyleSheet,SafeAreaView } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const PostScreen = ({navigation}) => {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#272727'}}>
            <ScrollView>
            <View style={styles.Title}>
            <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff',fontWeight: "bold",marginTop:20}}>SUGESTÕES</Text>  
            <Ionicons name="chatbox" color='#ffffff' size={30} style={{marginLeft:10,marginTop:20}} />
            </View>
            <View style={{backgroundColor:'#ff8c00'}}>
            </View>
            <View style={styles.List}>
            <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#000000',marginTop:20,marginLeft: 20}}>Lista de Sugestões:</Text> 
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostScreen;

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
     }
});