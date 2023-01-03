import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const image = {uri:"https://images6.alphacoders.com/115/thumb-1920-1154171.jpg"}

const CarImage = () => {
  return (
    <View style = {{flex:1,position:'absolute'}} >
    <ImageBackground source={image} resizeMode = 'cover' style= {{flex:1,justifyContent:'center'}}/>
    </View>
  )
}

export default CarImage