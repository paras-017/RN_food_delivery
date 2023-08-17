import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'


const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View>
      <ScrollView  showsHorizontalScrollIndicator={false} className='overflow-' contentContainerStyle={{paddingHorizontal:15}}>
        <FlatList  horizontal={true}  data={categories} renderItem={({item})=>{
            let isActive = item.id==activeCategory
            let btnClass = isActive?'bg-gray-600':'bg-gray-200'
            let textClass = isActive?'font-semibold text-gray-800':'text-gray-500'
            
         return (
            <View key={item.id} className='flex justify-center items-center mr-6'>
                <TouchableOpacity onPress={()=> setActiveCategory(item.id)}  className={`p-1 rounded-full shadow bg-gray-400 ${btnClass}`}>
                  <Image style={{width: 45, height: 45}} source={item.image} />
                </TouchableOpacity>
                  <Text className={`text-sm text-black ${textClass}`}>{item.name}</Text>
            </View>
         )
        }}/>
      </ScrollView>
    </View>
  )
}

export default Categories