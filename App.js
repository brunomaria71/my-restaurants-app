import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground } from "react-native";
import { useEffect, useState } from "react";

const image = {uri: 'https://wallpapercave.com/wp/wp5514652.png'}
export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://my-first-firestore-mb.web.app/restaurants"
        );
        const data = await response.json();
        setAllRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={image} style={styles.container} >
      <Text style={styles.words}>Maria's Restaurant App</Text>
      {allRestaurants ? (
        allRestaurants?.map((restaurant) => {
          return <Text key={restaurant.id} style={styles.words}>{restaurant.name}</Text>;
        })
      ) : (
        <ActivityIndicator size="large" color="purple" />
      )}
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  words: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '25',
    fontFamily: "Cochin"
  }
});
