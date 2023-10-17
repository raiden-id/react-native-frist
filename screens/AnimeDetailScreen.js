import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  View,
  Text,
  Safe,
  AreaView,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function AnimeDetailScreen({ route }) {
  const { anime } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <ImageBackground
            source={{ uri: anime.cover }}
            style={{ width: "100%", height: 300 }}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,1.5)"]} // Transparent hingga hitam dengan opacity 50%
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 300, // Sesuaikan tinggi dengan gambar
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: 20, // Atur padding sesuai kebutuhan
            }}
          >
            <Text className="text-lg font-semibold text-white">
              {anime.title}
            </Text>
          </View>
        </View>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    //paddingTop: StatusBar.currentHeight,
  },
  coverImage: {
    width: "100%",
    height: 300,
    opacity: 1,
  },
  scrollView: {
    backgroundColor: "black",
    //marginHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 48,
  },
});