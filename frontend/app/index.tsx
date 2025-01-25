import React from 'react';
import { Button, Text, View, Image, Animated, ScrollView, Dimensions, StyleSheet } from "react-native";
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
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    paddingBottom: 60,
  },
  button: {
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#FFD500', 
    fontSize: 20,
    padding: 8,
    color: '#FFFFFF',
  }
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Napful</Text>
      </View>
      <View>
        <Link href="/inputs">
          <Button title="Lights out?" />
        </Link>
      </View>
    </View>
  );

}
