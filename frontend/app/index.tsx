import { Text, View, StyleSheet } from "react-native";

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
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Napful</Text>
    </View>
  );

}
