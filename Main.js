import { View, Text,Button } from 'react-native'
import React,{useEffect} from 'react'


const Main = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
     navigation.navigate('Home')
    },1500)

  },[])
    return (
      <View style={{flex:1, backgroundColor: 'black'}}>
        <Text style={{fontSize:70, fontStyle:'italic', alignSelf: 'center',marginTop:200, fontWeight:'bold', color:'blue'}}>Charvi's</Text>
        <Text style={{fontSize:70, fontStyle:'italic', alignSelf:'center', color:'red', fontWeight:'bold'}}>App</Text>
      </View>
    )
  }

export default Main 
