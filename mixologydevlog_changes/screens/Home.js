import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";



export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

   
  render() {
   
      return (
        <View
          style={styles.containerLight}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/Mixology.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleTextLight}>
                Mixology APP
              </Text>
            </View>
           
          </View>
          <View style={styles.blankspace}>

          </View>
           <View style={styles.centerlogo}>
             <Image
                source={require("../assets/Mixology.png")}                
               
              ></Image>
            </View>
            <View style={styles.containerlogo}>
             <TouchableOpacity  onPress={() =>
                        this.props.navigation.navigate("Menu")}>
            <Image
                source={require("../assets/Gobutton.png")}
                style={styles.buttonlook}
              >          
                
            </Image>
             </TouchableOpacity>
            </View>
           
          </View> 
        );
  }
}
    
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  blankspace:
  {
    flex:0.1,
    width:"100%",
    height:"20%",
    backgroundColor:"#ed4824"
  },
  buttoncontainer:{
    flex:0.1,
    justifyContent: "center",
    alignItems: "center",
   
  },
  buttonstyle:{
        resizeMode:"contain"
  },
  
  containerlogo:{
       
      alignSelf:"center",
      alignItems:'center',
      justifyContent:'center',
      
  },
  buttonlook:{
    width:30,
    height:30,
    alignSelf:'center',
    marginTop:70,
    marginLeft:200,
    justifyContent:"center",
    backgroundColor:"#ed4824"
  },
  centerlogo:
  {
    flex:0.7,
    resizeMode: "contain",
    width: "95%",
    height:200,
    alignSelf: "center",
    justifyContent:"center",
    alignItems:"center"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "#ed4824"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
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
  appTitleText: {
    color: "white",
    fontSize: 28,
    
  },
  appTitleTextLight: {
    color: "black",
    fontSize: 28,
    
  },
  cardContainer: {
    flex: 0.85
  },
  noStories: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center"
  },
  noStoriesTextLight: {
    fontSize: 40,
   
  },
  noStoriesText: {
    color: "white",
    fontSize: 40,
  
  }
});
