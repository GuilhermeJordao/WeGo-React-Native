import React, { useState, useEffect,} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth, db } from '../config/firebase';



const CadastroScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [user, setUser] = useState("");
  const [userUid, setUserUid] = useState("");
  
  

  const  handleSignup = async () => {
    
    await auth.createUserWithEmailAndPassword(email,password).then(userCredencials => {
      var userUser =userCredencials.user;
      setUserUid(userUser.uid);
      console.log("UUSUARIO CRIADO: "+userCredencials.user);
    }).catch(error => alert(error.message))
    
    
    setUserFirebasae();
    
      // .then(e => {
      //   alert("Arquivo Cadastraado" + e.id);
 }   // })
  

 function setUserFirebasae( ){
   console.log(userUid)
  const dataAdd = {
    email: email,
    nome_usuario: user,
    uid: userUid,
  }

  db.collection('usuarios').add(dataAdd).then(docRef => {
    console.log("Cadastro Concluido: ")
    console.log(docRef);
  })
 }

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 250, y: 155 }));
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  useEffect(() => {
    

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 1,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../assets/images/logo2.png')}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}>
          <TextInput
          style={styles.input}
          placeholderTextColor="#FFF"
          placeholder="Nome de Usuario"
          autoCorrect={false}
          onChangeText={(text) => setUser(text)}
          value={user}
        />

        <TextInput
          style={styles.input}
          placeholderTextColor="#FFF"
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        
        <Animated.View  style={styles.containerPass}>

        <Animated.View  style={styles.inputArea}>

        <TextInput
          style={styles.inputSenha}
          placeholderTextColor="#FFF"
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidePass}
          value={password}
        />
       <TouchableOpacity style={styles.icon} 
        onPress={() => setHidePass (!hidePass)} >
        { hidePass ?
          <Ionicons  name = 'eye' color ='#FFF' size= {18} /> 
          :
          <Ionicons  name = 'eye-off' color ='#FFF' size= {18} /> 
        }  
        </TouchableOpacity>
        
        </Animated.View>

        </Animated.View>

        {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons 
          name="alert-circle"
          size={24}
          color='#bdbdbd'
          />
          <Text style={styles.warningAlert}>invalid e-mail or password</Text>
        </View>
        :
        <View/>
        }
        
        { email === "" || password === ""
        ?
        <TouchableOpacity disabled={true} style={styles.btnSubmit}>
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSignup}>
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
        }
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

export default CadastroScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },

  input: {
    flexDirection: 'row',
    backgroundColor: '#FD6A2B',
    height: '20%',
    width: '93%',
    marginBottom: 15,
    color: '#FFF',
    fontSize: 17,
    borderRadius: 26,
    padding: 10,
  },
  
  containerPass: {

  },

  inputArea: {
   flexDirection: 'row',
   width:'95%',
   backgroundColor: '#FD6A2B',
   borderRadius: 30,
   marginBottom: 15,
   alignItems: 'center',
   justifyContent: 'center',
   alignContent: 'center',

  },

  inputSenha: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#FD6A2B',
    width: '80%',
    marginBottom: 15,
    color: '#FFF',
    fontSize: 17,
    borderRadius: 30,
  },
 
  icon: {
    flexDirection: 'row',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  btnSubmit: {
    backgroundColor: '#CC4C19',
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
  textRegis: {
    flexDirection: 'row',
    color: '#FFF',
    textAlign: 'left',
    height: 50,
  },

  btnRegister: {
    marginTop: 10,
    textAlign: 'right',
    flexDirection: 'row',
  },

  registerText: {
    color: '#CC4C19',
  },
  warningAlert: {
    paddingLeft:10,
    color:"#bdbdbd",
    fontSize:16,
  },
  contentAlert: {
    marginTop:20,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
});