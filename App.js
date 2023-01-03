import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import CarImage from './components/Home/CarImage';
import HomeScreen from './Screens/HomeScreen';
export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'
  },
});
