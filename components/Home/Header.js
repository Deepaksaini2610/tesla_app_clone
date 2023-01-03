import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import BottomHeader from "./BottomHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faToolbox,
  faGear,
  faGreaterThan,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Data from "../HomeData/Data";
import { ScrollView, TouchableOpacity } from "react-native-web";
import TopHeader from "./TopHeader";
// import BackgroundImage from "./BackgroundImage";

const Header = () => {
  return (
    
    <View style={styles.Maincontainer}>
      <View style={styles.container}>
        <FontAwesomeIcon icon={faGear} style={styles.icons} />
        <Text style={{ color: "white", fontSize: 20 }}>Kr$Sign</Text>
        <FontAwesomeIcon icon={faToolbox} style={styles.icons} />
      </View>
      <View>
        <TopHeader/>
      </View>
      <View>
        <BottomHeader />
      </View>

      {Data.map((itm, index) => (
        <ScrollView>
          <View style={styles.mainIcon}>
            <TouchableOpacity style={styles.leftcontainer}>
              <FontAwesomeIcon icon={itm.iconname} style={{ color: "white" }} />
              <View>
                <View>
                  <Text style={{ color: "white", marginLeft: 20 }}>
                    {itm.title}
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "white",marginLeft:20 }}>{itm.subtitle}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightContainer}>
              <FontAwesomeIcon
                style={{ color: "white" }}
                icon={faGreaterThan}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    borderColor: "red",
    alignItems: "center",
  },
  icons: {
    color: "white",
    width: 20,
    height: 30,
  },
  mainIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop:50,
    alignItems:'center'
  },
  leftcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    flexDirection: "row",
  },
});
export default Header;
