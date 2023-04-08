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
            <Image source={require("../assets/w.jpeg")} style={{width:"50%",height:"50%",justifyContent:"center",
            alignItems:"center",resizeMode:"contain",marginTop:-50,marginLeft:70}}/>
            <Text >
            Earth's surface is covered three-fourth with water, but very small percentage of water is usable and accessible to us. This is mainly the surface run-off and groundwater which can be renewed by the hydrological process. Still, Water scarcity persists.
</Text><Text style={{fontWeight:"bold", fontSize:20}}>
Causes of Water Scarcity: Some of the common causes are:-
</Text><Text>
Uneven Precipitation - The seasonal and annual rainfall varies with respect to geographical region and time.

Over Exploitation- With the increasing population and unequal access to water resources, the water resources are exploited for domestic purposes, industrial needs. It is also polluted due to hazardous practices of the industries.

Irrigative agricultural fields- Water is needed in a large quantity for growing crops. Farmer owns individual water pumps, which causes decreased groundwater level in that region, causing scarcity and drought. 

Industries - Industries not only harm and pollute the water resources like rivers and lakes, they also require groundwater for working by water pumping devices. The electric power supply source is also Hydroelectric power.

Releasing untreated chemicals into water bodies by the industries. 

Unplanned drainage system:- Throwing of garbage in water bodies pollute them and makes them unfit for use.
            </Text>
            <TouchableOpacity  onPress={() =>
                        this.props.navigation.navigate("ContentScreen")}>
            <Image source={require("../assets/back.png")} style={{width:50,height:50,marginLeft:130}}/>
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
    flex:1,
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