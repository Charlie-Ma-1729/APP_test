import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./source/screen/Home";
import Book from "./source/screen/Book";
import DrawerC from "./source/component/DrawerC";
import Content from "./source/component/Content";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DetailsScreen({ navigation }) {
  return <Content />;
}


const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="book " component={Book} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerStyle={{
          backgroundColor: "#f0f0f0",
          width: 200,
        }}
        drawerContent={(props) => <DrawerC {...props} />}
      >
        <Drawer.Screen name="Home" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
