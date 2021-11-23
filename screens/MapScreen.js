import { ActivityIndicator } from "react-native";
import { View,Text,Button,StyleSheet,TextInput } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import FabButton from '../components/AnimateButton';
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';


const MapDarkStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
const MapScreen = ({navigation}) => {
  const [curentPosition, setCurentPosition] = useState(initialState);

  useEffect(() => {
      Geolocation.getCurrentPosition(position => {
      //alert(JSON.stringify(position))
      const {longitude, latitude} = position.coords;
      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude,
      })
    },
    error => alert(error.message),
    {timeout: 20000, maximumAge: 1000}
    )
  }, [])

    return curentPosition.latitude ? (
      <View  style={styles.container}>
       <MapView 
       loadingEnabled={true}
       style={styles.container}
       provider= {PROVIDER_GOOGLE} // remove if not using Google Maps
       customMapStyle={MapDarkStyle}
       initialRegion={curentPosition}
       showsUserLocation
       >
      <Marker 
          coordinate={{
            latitude: -23.523474568814375,
            longitude: -46.474985823636686,
            }}
            image={require('../assets/images/marker.png')}
            title="Posto Ipiranga"
            onPress={() => navigation.navigate("PostoIpirangaZL")}
            description="Endereço: Av. Águia de Haia, 2606"
          />
      <Marker 
          coordinate={{
            latitude: -23.5150,
            longitude: -46.4767,
            }}
            image={require('../assets/images/marker.png')}
            title="Auto Posto Morada do Sol"
            onPress={() => navigation.navigate("PostoMorada")}
            description="Endereço: Av. Águia de Haia, 3605"
          />
       <Marker 
          coordinate={{
            latitude: -23.5157,
            longitude: -46.4855,
            }}
            image={require('../assets/images/marker.png')}
            title="Auto Posto Estrela do Icarai"
            onPress={() => navigation.navigate("PostoEstrela")}
            description="Endereço: Estr. de Mogi das Cruzes, 2595"
          />
        <Marker 
          coordinate={{
            latitude: -23.51596953878233,
            longitude: -46.46798668893507,
            }}
            image={require('../assets/images/marker.png')}
            title="Auto Posto Casa Nova Da Imperador"
            onPress={() => navigation.navigate("Imperador")}
            description="Endereço: Av. do Imperador, 3677"
          />
        <Marker 
          coordinate={{
            latitude: -23.511846156731323,
            longitude: -46.487903396909005,
            }}
            image={require('../assets/images/marker.png')}
            title="Senhora da Aparecida Laguna Auto Posto"
            onPress={() => navigation.navigate("Laguna")}
            description="Endereço: Rua Ponte Rasa, 226"
          />
          <Marker 
          coordinate={{
            latitude: -23.515606128995287,
            longitude: -46.46828984006059,
            }}
            image={require('../assets/images/marker.png')}
            title="Auto Posto Biri - Posto Petróleo"
            onPress={() => navigation.navigate("PostoBiri")}
            description="Endereço: Av. do Imperador, 3804"
          />
          <Marker 
          coordinate={{
            latitude: -23.524134668714186,
            longitude: -46.49341036509144,
            }}
            image={require('../assets/images/marker.png')}
            title="Posto de combustíveis São Severo"
            onPress={() => navigation.navigate("Severo")}
            description="Endereço: Av. Águia de Haia, 3605"
          />
          <Marker 
          coordinate={{
            latitude: -23.53329686064878,
            longitude: -46.48701397770128,
            }}
            image={require('../assets/images/marker.png')}
            title="Posto de Serviços Nova Jerusalém"
            onPress={() => navigation.navigate("Posto NovaJerusalem")}
            description="Endereço: R. dos Continentes, 444"
          />
          <Marker 
          coordinate={{
            latitude: -23.53428432257863,
            longitude: -46.49169064091937,
            }}
            image={require('../assets/images/marker.png')}
            title="Auto Posto Penha Fuel"
            onPress={() => navigation.navigate("Penha-Fuel")}
            description="Endereço: R. Itinguçú, 2751"
          />
          <Marker 
          coordinate={{
            latitude: -23.5349456489618,
            longitude: -46.49931629921953,
            }}
            image={require('../assets/images/marker.png')}
            title="Posto Petrobras"
            onPress={() => navigation.navigate("Posto Petrobras")}
            description="Endereço: Av. Antônio Estevão de Carvalho, 2804"
          />
          <Marker 
          coordinate={{
            latitude: -23.51423568074468,
            longitude: -46.49252858583147,
            }}
            image={require('../assets/images/marker.png')}
            title="Auto Posto Paradise"
            onPress={() => navigation.navigate("PostoParadise")}
            description="Endereço: Estr. de Mogi das Cruzes, 771-759"
          />
          <Marker 
          coordinate={{
            latitude: -23.509223479999775,
            longitude: -46.49652830452952,
            }}
            image={require('../assets/images/marker.png')}
            title="Posto Serviço Bandeira"
            onPress={() => navigation.navigate("Bandeira")}
            description="Endereço: Av. São Miguel, 3785"
          />
          <Marker 
          coordinate={{
            latitude: -23.581644919256476,
            longitude: -46.66672170937257,
            }}
            image={require('../assets/images/marker2.png')}
            title="Porsche Estação de Carregamento"
            onPress={() => navigation.navigate("PorschePP")}
            description="Endereço: HOTEL UNIQUE - Av. Brigadeiro Luís Antônio, 4700"
          />
          <Marker 
          coordinate={{
            latitude: -23.577991924852242,
            longitude: -46.67112894673391,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Supermercado St. Marche Itaim"
            onPress={() => navigation.navigate("March")}
            description="Endereço: 600, Av. São Gabriel"
          />
          <Marker 
          coordinate={{
            latitude: -23.574996016515545,
            longitude: -46.65651940841373,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Centro Automotivo Porto Seguro - GRUPO FURLAN"
            onPress={() => navigation.navigate("Porto")}
            description="Endereço:Av. Brigadeiro Luís Antônio, 3383"
          />
          <Marker 
          coordinate={{
            latitude: -23.573004915922425,
            longitude: -46.65484361068512,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Volvo Charging Station"
            onPress={() => navigation.navigate("VolvCH")}
            description="Endereço: Av. Brigadeiro Luís Antônio, 3126"
          />
          <Marker 
          coordinate={{
            latitude: -23.5666783483436,
            longitude: -46.65056508825552,
            }}
            image={require('../assets/images/marker2.png')}
            title="Estação de carregamento para veículos elétricos"
            onPress={() => navigation.navigate("EsEle")}
            description="Endereço: Av. Paulista, 777"
          />
          <Marker 
          coordinate={{
            latitude: -23.567156450705166,
            longitude: -46.65872052874977,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Posto Ipiranga - Lisboa"
            onPress={() => navigation.navigate("Lisb")}
            description="Endereço: R. José Maria Lisboa, 756"
          />
          <Marker 
          coordinate={{
            latitude: -23.56652230622501,
            longitude: -46.664821428844526,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Volvo"
            onPress={() => navigation.navigate("Volv")}
            description="Endereço: Alameda Min. Rocha Azevedo, 1143"
          />
          <Marker 
          coordinate={{
            latitude: -23.5719753945627,
            longitude: -46.67492864481402,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Autostar BMW"
            onPress={() => navigation.navigate("BMW")}
            description="R. Colômbia, 810 - Jardins"
          />
          <Marker 
          coordinate={{
            latitude: -23.57714919988399,
            longitude: -46.688205963683,
            }}
            image={require('../assets/images/marker2.png')}
            title="Porsche Destination Charging Station"
            onPress={() => navigation.navigate("PCcsc")}
            description="Endereço: Av. Brg. Faria Lima, 2230"
          />
          <Marker 
          coordinate={{
            latitude: -23.56384622624852,
            longitude: -46.652866577193834,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Shopping Cidade São Paulo"
            onPress={() => navigation.navigate("SP")}
            description="R. Colômbia, 810"
          />
          <Marker 
          coordinate={{
            latitude: -23.563941802628047,
            longitude: -46.655864326390066,
            }}
            image={require('../assets/images/marker2.png')}
            title="Eletroposto Hotel Tivoli Mofarrej"
            onPress={() => navigation.navigate("Hotel")}
            description="Endereço: Alameda Santos, 1437"
          />
       </MapView>
      <View style={styles.SearchBarView}>
     </View>
     <View style={styles.ButtonAnimated}>
     </View>
      </View>
    ): <ActivityIndicator style={{flex: 1}} animating size="large" />
}

export default MapScreen;

const styles = StyleSheet.create({
     container: {
      flex: 1,
     },
     ButtonAnimated: {
      position: 'absolute',
      marginTop: 680,
      marginLeft: 40,
      top: 10,
      width: '100%',
     },
});