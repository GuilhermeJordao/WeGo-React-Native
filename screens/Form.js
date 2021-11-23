import React from 'react';
import { View,Text,Button,StyleSheet,SafeAreaView } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import WebView from 'react-native-webview';
const Form = ({navigation}) => {
    return (
        <View style={styles.container}>
        <WebView
        source={{
          uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfnYbaBqb5-L8NXpxHKytFx_NwULXXNt14NN1L9bWGPCS-9NQ/viewform?usp=sf_link'
        }}
      />
      </View>
    )
}

export default Form;

const styles = StyleSheet.create({
     container:{
     flex: 1,
     backgroundColor: '#ffffff',
     justifyContent: 'center',
     },
});