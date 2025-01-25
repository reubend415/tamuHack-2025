import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0215',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  }
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Napful</Text>
      <Link href="/inputs" style={styles.button}>Input New Nap</Link>
    </View>
  );

}
