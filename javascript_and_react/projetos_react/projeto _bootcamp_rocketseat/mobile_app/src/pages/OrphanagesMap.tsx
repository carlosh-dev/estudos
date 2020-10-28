import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  
  import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
  
  import { Feather } from '@expo/vector-icons'
  import mapMarker from "../images/map-marker.png";
import { useNavigation } from '@react-navigation/native';
  

export default function OrphanagesMap() {

    const navigation = useNavigation();

    function handleNavigateToOrphanageDatails(){
        navigation.navigate('OrphanageDetails')
    }

    return (
        <View style={styles.container}>
      <MapView
        style={styles.maps}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.6621956,
          longitude: -46.6608496,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          icon={mapMarker}
          coordinate={{
            latitude: -23.6621956,
            longitude: -46.6608496,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDatails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}> 2 Orfanatos Encontrados</Text>

        <TouchableOpacity
          style={styles.createOrphanageButton}
          onPress={() => {}}
        >
          <Feather name="plus" size={20} color="#FFF"></Feather>
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    maps: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 16,
      justifyContent: "center",
  
    },
  
    calloutText: {
      color: "#0089a5",
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 46,
      paddingLeft:24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 5
    },
  
    footerText: {
      color: '#8fa7b3',
      fontFamily: 'Nunito_700Bold',
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  