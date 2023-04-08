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



export default class ContentScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
            
        };
    }
render()
{
  return(
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/Mixology.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
            <Text style={styles.apptext}>
            Mixology
            </Text>
            </View>
            </View>
          <View style={{flex:1,backgroundColor:"orange"}}>
          
         
          <Image source={require("../assets/atomic.png")}style={styles.iconImage1}>
          </Image>
         
          

           </View>
          
          
    </View>
  )

}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
   droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight :35
  },
   appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
   iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  apptext:{
    color:"white",
    fontWeight:"Bold",
    fontSize:28,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"
  },
  cardContainer:{
    paddingTop:10,
    flex:0.45,
    backgroundColor:"white",
    borderRadius:12,
    marginTop:20
  },
   iconImage1: {
    width: "100%",
    height:"100%",
    resizeMode: "contain"
   }
})