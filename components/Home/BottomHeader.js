import { View,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock,faFan, faKey, faUnlock } from '@fortawesome/free-solid-svg-icons'

const BottomHeader = () => {
  
  const [current,setLock] = useState(faLock);  


  return (

    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faFan}
          style={{
            color: "white",
            padding: 15,
            borderColor: "white",
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon
          icon={faKey}
          style={{ color: "white", padding: 15, width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (current == faLock){
          setLock(faUnlock)
          }
          else{
            setLock(faLock)
          }
        }}
      >
        <FontAwesomeIcon
          icon={current}
          style={{ color: "white", padding: 15, width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        top:40,
        borderColor:"red"
    }
})
export default BottomHeader