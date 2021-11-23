import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback,Animated} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export default class FabButton extends Component {

   animation = new Animated.Value(0);

 toogleMenu = () => {
     const toValue = this.open ? 0 : 1

     Animated.spring(this.animation, {
         toValue,
         friction: 6,
         useNativeDriver: true
     }).start();

     this.open = !this.open;

 }
    render(){

        const SataliteStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const RadarStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        }
 
        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg","45deg"]
                    })
                }
            ]
        }
   

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                 <Animated.View style={[styles.button, styles.submenu, RadarStyle ]}>
                 <AntDesign name="enviroment" color='#fff' size={20} />
                 </Animated.View>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback>
                 <Animated.View style={[styles.button, styles.submenu, SataliteStyle]}>
                 <AntDesign name="aliwangwang" color='#fff' size={20} />
                 </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toogleMenu}>
                 <Animated.View style={[styles.button, styles.menu, rotation]}>
                 <AntDesign name="plus" color='#fff' size={24} />
                 </Animated.View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position: 'absolute'
    },
    button:{
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#002138',
        shadowOpacity: 0.3,
        shadowOffset: {
            height:10,
        }
    },
    menu:{
        backgroundColor: '#ff8c00'
    },
    submenu:{
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#ff8c00'
    }
});