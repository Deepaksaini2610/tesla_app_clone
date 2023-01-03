import { View, StyleSheet, SafeAreaView} from "react-native";
import React, { Component } from "react";
import Header from "../components/Home/Header";
// import CarImage from '../components/Home/CarImage'
// import BottomHeader from "../components/Home/BottomHeader";
// import BackgroundImage from "../components/Home/BackgroundImage";
// import { View, } from "react-native";
const HomeScreen = () => {
  return (
    <SafeAreaView style={style.main}>
      <View style={styles.container}>
        
        <Header />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  
});

export default HomeScreen;
