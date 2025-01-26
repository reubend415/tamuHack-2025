import React from 'react';
import { ImageBackground, Button, Text, View, Image, Animated, ScrollView, Dimensions, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0b0215',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    flex: 1,
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
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Index() {
  const [loaded, error] = useFonts({
    'Azeret-Mono': require('../assets/fonts/AzeretMono-VariableFont_wght.ttf'),
  });


  if (!loaded && !error) {
    return null;
  }


  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right', 'top', 'bottom']}>
        <ImageBackground source={require('../assets/images/Main.png')} resizeMode='contain' style={styles.image}>
          <Text style={styles.title}>Napful</Text>
          <Link href="/inputs" style={styles.button}>
            <Button title="Lights out?" />
          </Link>
        </ImageBackground>
      </SafeAreaView>
      {/* <SafeAreaView>
      </SafeAreaView>

      <SafeAreaView>
      </SafeAreaView> */}
    </SafeAreaProvider>

    // <View style={styles.container}>
      
      
    //   <View>
    //   </View>
    //   <View>
        
    //   </View>
    // </View>
  );

}
