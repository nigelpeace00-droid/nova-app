import React from "react";

import {
  NavigationContainer
} from "@react-navigation/native";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";


import NovaHome from "./src/screens/NovaHome";

import Settings from "./src/screens/Settings";


const Stack =
createNativeStackNavigator();



export default function App(){

return(

<NavigationContainer>

<Stack.Navigator>


<Stack.Screen

name="Nova"

component={NovaHome}

/>


<Stack.Screen

name="Settings"

component={Settings}

/>


</Stack.Navigator>


</NavigationContainer>

);

}
