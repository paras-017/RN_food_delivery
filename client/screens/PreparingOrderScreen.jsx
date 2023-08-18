import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('Delivery');
  },3000);
  }, [])
  
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text className='text-indigo-700'>Hello There</Text>
      <Image source={require('../assets/images/bikeGuy2.gif')} className="h-80 w-80 " />
    </View>
  )
}

export default PreparingOrderScreen