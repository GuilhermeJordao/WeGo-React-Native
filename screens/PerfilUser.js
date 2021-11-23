import React from 'react';
import { View,Text,Button,StyleSheet, SafeAreaView, ImageBackground,} from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { auth, db } from '../config/firebase';

import Ionicons from 'react-native-vector-icons/Ionicons'



const PerfilScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#272727'}}>
            <ScrollView>
                <View style={{alignItems: 'center',marginTop: 20}}>
                <ImageBackground 
                  source={require('../assets/images/GirlProfileTest.png')}
                   style={{width:150,height:150}} 
                   imageStyle={{borderRadius:100}}/> 
                </View>
                <View  style={{alignItems: 'center',marginTop: 20}}>
                <Text style={{fontSize:20,fontFamily:'Roboto-Medium',color: '#ffffff'}}>{auth.currentUser?.email}</Text>  
                <Text style={{fontSize:15,fontFamily:'Roboto-Medium',color: '#DCDCDC'}}></Text>  
                </View>
                <View style={{flexDirection: 'row',justifyContent:'space-between',}}>
                    <View>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => navigation.replace("Login")}>
                    <Text style={{fontSize:18,fontFamily:'Roboto-Medium',color: '#FF0000',marginTop: 10}}>Logout</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View
                style={{
                borderBottomColor: '#ffffff',
                borderBottomWidth: 1,
                marginTop: 20
                }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default PerfilScreen;

const styles = StyleSheet.create({
     container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
     },
});