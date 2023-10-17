import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";

// components
import AnimeList from "../components/animeList";

// services
import { animebaru } from "../services/api";

const HomeScreen = () => {
  // services
  const [animenew, setAnimeNew] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    AnimeOngoing();
  }, []);

  const AnimeOngoing = async () => {
    const data = await animebaru();
    //console.log("animebaru -> ", data.animebaru.length);
    if (data && data.animebaru) setAnimeNew(data.animebaru);
    setLoading(false);
  };

  return (
   
      //profile
     
      // anime baru component
      <View className="flex flex-1">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>{animenew.length > 0 && <AnimeList data={animenew} />}</View>
        )}
      </View>
    
  );
};

export default HomeScreen;
