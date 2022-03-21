import React from 'react'
import { View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Support from './screens/support';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Booking from './screens/Booking';
import RepairAndServices from './screens/RepairAndServices';

const Stack = createNativeStackNavigator();

const About = () => {
  return (
    <View>
      <Text>HTC</Text>
    </View>
  )
}

const Header = ({name}) => {
  return (
    <View style={{ paddingVertical:15,paddingLeft:15,flexDirection:'row' }}>
      <Ionicons name='arrow_back' size={18} color={'#000'} style={{ paddingRight:15 }}/>
      <Text style={{ fontSize:22,fontWeight:'600',color:'black' }}>{name}</Text>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Repair' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Support' component={Support} options={{
          header: () => <Header name={'Support'}/>,
          headerShown:true,
        }}/>
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='Booking' component={Booking} options={{
           header: () => <Header name={'Bookings'}/>,
           headerShown:true,
        }}/>
        <Stack.Screen name='Repair' component={RepairAndServices} options={{
           
           headerShown:false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App