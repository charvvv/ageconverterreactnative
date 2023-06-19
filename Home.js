import { View, Text,Button, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

const Home = ({navigation}) => {
const [Age, setAge]= useState(0)   
const [input, setInput]= useState(0)


function convert (){
  setAge(365*24*input)
}
    
    
    
    return (
      <View>
        <Text style={{alignSelf:'center', fontSize:50, marginTop:150}}>Enter Your Age</Text>
        <TextInput onChangeText= {(word)=>{setInput(word)}} style={{borderWidth:1,height:50, marginTop:30, width:200, alignSelf:'center', borderRadius:25}}></TextInput>
        <TouchableOpacity onPress= {()=>{navigation.navigate('Result', {data: input});convert()}} style={{backgroundColor:'red', alignSelf:'center', justifyContent:'center', alignItems: 'center', height:60, width: 120, marginTop: 20, borderRadius: 7}}>
              <Text style={{fontSize: 40}}>Enter!</Text>
        </TouchableOpacity>

       
      </View>
    )
  }

export default Home
