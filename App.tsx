import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'

const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <TouchableOpacity onPress={()=>{
      setVisible(true)
    }} activeOpacity={1} style={{backgroundColor:"grey",padding:16,borderRadius:6,paddingHorizontal:26}}>
      <Text style={{color:"#fff"}}>Sample Button</Text>
    </TouchableOpacity>
    <Modal isVisible={visible} onBackdropPress={()=>{
       setVisible(false)
    }} style={{margin:0,justifyContent:"flex-end"}}>
      <View style={{borderTopLeftRadius:16,borderTopRightRadius:16,padding:16,backgroundColor:"#ffffff",paddingBottom:36}}>
        <Text style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    </Modal>
    </View>
  )
}

export default App