import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState, Fragment } from "react";
import styles from "./src/styles";

const bgimage = {
  uri: "https://png.pngtree.com/background/20210710/original/pngtree-restaurant-menu-background-material-picture-image_1052797.jpg",
};

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    fetch("https://my-first-firestore-mb.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setAllRestaurants(data))
      .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={bgimage}
        style={styles.container}
      >
        <ScrollView>
          <Text style={styles.restaurantsName}>Maria's Restaurant App</Text>

          {!allRestaurants ? (
            <ActivityIndicator size="large" color="purple" />
          ) : (
            allRestaurants?.map((restaurant) => {
              return (
                <Fragment key={restaurant.id}>
                <Text key={restaurant.id} style={styles.restaurantsName}>
                  {restaurant.name} / {restaurant.cuisine}
                </Text>
                <Image source={{ uri: restaurant.image}} style={{width: '100%', height:100}} />
                </Fragment>
              );
            })
          )}
          <StatusBar style="auto" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

