import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showGrid, setShowGrid] = useState(true); // State untuk menentukan apakah ingin menampilkan grid atau tidak

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://hudaxcode.vercel.app/api/v1/animebaru/1"
      );
      const json = await response.json();
      setData(json.animebaru);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View className="flex flex-1 bg-slate-800">
      <Text
        style={styles.toggleButton}
        onPress={() => setShowGrid(!showGrid)} // Tombol untuk beralih antara grid dan daftar
      >
        {showGrid ? "Tampilkan Sebagai Daftar" : "Tampilkan Sebagai Grid"}
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : showGrid ? (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <Image source={{ uri: item.cover }} style={styles.image} />
              <Text
                className="text-sm leading-4 mt-2 text-gray-300"
                numberOfLines={2}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Image source={{ uri: item.cover }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

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

export default App;
