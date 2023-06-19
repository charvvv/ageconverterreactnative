import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Main from './Screens/Main';
import Result from './Screens/Result';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
    headerShown: true
  }}>

        <stack.Screen name='Main' component={Main}>

        </stack.Screen>

          <stack.Screen name='Home' component={Home}>

        
        </stack.Screen>

        <stack.Screen name='Result' component={Result}>

        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
