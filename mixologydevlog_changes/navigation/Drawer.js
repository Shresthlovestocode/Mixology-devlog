import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home"
import Chemistry from "../screens/Chemistry";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Chemistry} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;