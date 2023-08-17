import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/RestaurantScreen'
import HomescreenScreen from './screens/HomescreenScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomescreenScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App