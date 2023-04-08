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
          <View style={styles.cardContainer}>
           <TouchableOpacity  onPress={() =>
                        this.props.navigation.navigate("Atomic")
                    }>
          <Text style={{fontColor:"Black",fontWeight:"Bold",justifyContent:"center",alignContent:"center",alignItems:"center",textAlign:"center",fontSize:30}}> 
          
        Atomic
          </Text>
         
          </TouchableOpacity>
          

           </View>
            <View style={styles.cardContainer}>
           <TouchableOpacity  onPress={() =>
                        this.props.navigation.navigate("Electrons")
                    }>
          <Text style={{fontColor:"Black",fontWeight:"Bold",justifyContent:"center",alignContent:"center",alignItems:"center",textAlign:"center",fontSize:30}}> 
          
        Electron
          </Text>
         
          </TouchableOpacity>
          

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
    flex:0.1,
    backgroundColor:"white",
    borderRadius:12,
    marginTop:20
  },
   iconImage1: {
    width: 350,
    height:200,
    resizeMode: "cover"
   }
})