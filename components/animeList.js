import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";

export default function AnimeList({ data }) {
  const navigation = useNavigation();
  const handleAnimePress = (item) => {
    navigation.navigate("AnimeDetail", { anime: item });
  };

  return (
    <FlatList
      className="bg-slate-800"
      data={data}
      keyExtractor={({ id }) => id.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.gridItem}>
          <TouchableOpacity onPress={() => handleAnimePress(item)}>
            <Image source={{ uri: item.cover }} style={styles.image} />
            <Text
              className="text-sm leading-4 mt-2 text-gray-300"
              numberOfLines={2}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  toggleButton: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: "start",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 5,
  },
  title: {
    marginTop: 8,
    textAlign: "center",
  },
});
