import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,ImageBackground,SafeAreaView
} from "react-native";

import axios from "axios";
import MapView, { Marker } from 'react-native-maps';

export default class Geography extends Component {
  constructor(props) {
        super(props);
        this.state = {
            location: {},
        };
    }

 

    componentDidMount() {
        this.getIssLocation()
    }

    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Your Current Location </Text>
                        </View>
                        <View style={styles.mapContainer}>
                            <MapView
                                style={styles.map}
                                region={{
                                    latitude: 18.520430,
                                    longitude: 73.856743,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}
                            >
                                <Marker
                                    coordinate={{ latitude: 18.520430, longitude: 73.856743 }}
                                >
                                    <Image source={require('../assets/iss-icon.png')} style={{ height: 50, width: 50 }} />
                                </Marker>
                            </MapView>
                        </View>
                        
                        
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    },
    infocontainer:{
      flex:0.2,
      backgroundColor:"white",
      marginTop:-10,
      padding:30
    },
    infotext:{
      fontSize:15,
      color:"black",
      fontWeight:"bold"
    }
})