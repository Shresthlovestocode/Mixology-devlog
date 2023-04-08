import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Menu from "./screens/Menu";
import ContentScreen from "./screens/ContentScreen";
import Chemistry from "./screens/Chemistry"
import periodic from "./screens/periodic_list"
import atomic from "./screens/atmoic"
import Electrons from "./screens/Electron";
import water from "./screens/water";
import Geo from "./screens/Geography"

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
     
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Geography" component={ContentScreen} />
      <Drawer.Screen name="Chemistry" component={Chemistry} />
      <Drawer.Screen name="Atomic" component={atomic} />
      <Drawer.Screen name="Electrons" component={Electrons} />
      <Drawer.Screen name="water" component={water} />
      <Drawer.Screen name="Periodic" component={periodic} />
      <Drawer.Screen name="Geo" component={Geo} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

