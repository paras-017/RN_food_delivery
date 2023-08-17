import { View, Text, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import FeaturedRow from '../components/FeaturedRow';
import { featured} from '../constants';
import Categories from '../components/Categories';


const HomescreenScreen = () => {
  return (
    <SafeAreaView className='bg-white'>
    {/*-------------INPUT and SLIDER------------- */}
    <StatusBar barStyle={'light-content'}/>
    <View className='flex-row items-center space-x-2 px-4 py-2'>
      {/* SEARCH */}
      <View className='flex-row flex-1 items-center px-2  rounded-full border border-gray-300'>
        <Icon.Search height='25' width='25' stroke='gray'/>
        <TextInput placeholder='Restaurant' className='ml-2 flex-1'/>
        <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New Delhi, IND</Text>
        </View>          
      </View>
      <View style={{backgroundColor:themeColors.bgColor(1)}} className='p-3 rounded-full bg-gray-300'>
        <Icon.Sliders height='20' width='20' strokeWidth={2.5} stroke='white'/>
      </View>
    </View>

    {/* -------------MAIN--------------------- */}
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
      {/*-------CATEGORIES-------*/}
      <Categories/>

      {/*-------FEATURED-------*/}
      <View className='mt-5'>
        {
        [featured,featured,featured].map((item,index)=>{
         return (
          <FeaturedRow key={index} title={item.title} restaurants={item.restaurants} description={item.description}/>
         )
        })
        }
      </View>
   
    </ScrollView>
  </SafeAreaView>
  )
}

export default HomescreenScreen