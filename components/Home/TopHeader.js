import { View, Text } from 'react-native'
import React from 'react'

const TopHeader = () => {
  return (
    <View style = {{flexDirection:'row',justifyContent:'center',marginTop:20}}>
      <View>
        <Text style={{ color: "white" }}>TopHeader</Text>
        <Text style={{ color: "white" }}>TopHeader</Text>
      </View>
      <View>
        <Text style={{ color: "white" }}>TopHeader</Text>
      </View>
    </View>
  );
}

export default TopHeader