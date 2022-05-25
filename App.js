import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function App() {

  useEffect(async () => {
    try {
      const response = await fetch(
        "https://my-first-firestore-mb.web.app/restaurants"
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  

  return (
    <View style={styles.container}>
      <Text>hi!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
