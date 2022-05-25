import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, ScrollView} from "react-native";
import { useEffect, useState } from "react";

const image = {uri: 'https://png.pngtree.com/background/20210710/original/pngtree-restaurant-menu-background-material-picture-image_1052797.jpg'}

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
      <ScrollView>
      <Text style={styles.restaurantsName}>Maria's Restaurant App</Text>

      {allRestaurants ? (
        allRestaurants?.map((restaurant) => {
          return <Text key={restaurant.id} style={styles.restaurantsName}>{restaurant.name}</Text>;
        })
      ) : (
        <ActivityIndicator size="large" color="purple" />
      )}
      <StatusBar style="auto" />
      </ScrollView>
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
  restaurantsName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: "Cochin",
    marginVertical: 150
  }
});


      // {/* <Image source={{ uri: restaurant.image}} style={{width: '100%', height:100}} /> */}
