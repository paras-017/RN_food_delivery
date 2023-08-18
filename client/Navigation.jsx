import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/RestaurantScreen'
import HomescreenScreen from './screens/HomescreenScreen'
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer screenOptions={{headerShown:false}}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomescreenScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" screenOptions={{ presentation: 'modal' }} component={CartScreen}/>
        <Stack.Screen name="PreparingOrder" screenOptions={{ presentation: 'fullScreenModal' }} component={PreparingOrderScreen}/>
        <Stack.Screen name="Delivery" screenOptions={{ presentation: 'fullScreenModal' }} component={DeliveryScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation