import { View, Text, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import {useRoute} from '@react-navigation/native'


const Result = () => {
const route = useRoute();
const [result, setresult] = useState(route.params.data)

useEffect(()=> {
    done();
  },[]);

function done() {
    setresult(365*24*result)
}
  return (
    <View>
      
     <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems: 'center', backgroundColor:'green'}}>
      <Text style={{ fontSize: 25 }}> Your Age in Hours is:</Text>
     <Text style={{ fontSize: 25, color:'red' }}> {result}</Text>
     </View>
    </View>
  )
}

export default Result
