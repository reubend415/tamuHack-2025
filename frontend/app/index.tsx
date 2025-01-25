import React from 'react';
import { Button, Text, View, Image, Animated, ScrollView, Dimensions, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0215',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Azeret-Mono',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    paddingBottom: 60,
    fontFamily: 'Azeret-Mono',
  },
  button: {
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#FFD500', 
    fontSize: 20,
    padding: 8,
    color: '#FFFFFF',
    fontFamily: 'Azeret-Mono',
  }
});

export default function Index() {
  const [loaded, error] = useFonts({
    'Azeret-Mono': require('../assets/fonts/AzeretMono-VariableFont_wght.ttf'),
  });


  if (!loaded && !error) {
    return null;
  }


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Napful</Text>
      </View>
      <View>
        <Link href="/inputs" style={styles.button}>
          <Button title="Lights out?" />
        </Link>
      </View>
    </View>
  );

}
