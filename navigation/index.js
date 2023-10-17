import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import AnimeDetailScreen from "../screens/AnimeDetailScreen";

//main stack index application
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: true }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="AnimeDetail"
          component={AnimeDetailScreen}
          options={{ headerShown: false }}
          //options={({ route }) => ({ title: route.params.anime.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
