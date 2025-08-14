import { View, Text, Platform, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context'
import { restaurants } from '../../store/restaurants';
import { ActivityIndicator, FlatList } from 'react-native-web';

const logo = require("../../assets/images/dinetimelogo.png")
const banner = require("../../assets/images/homeBanner.png")



const home = () => {


  const renderItem = ({item})=>(
    <TouchableOpacity>
      <Image resizeMode='cover' source={url.item.image}
      className="h-28 mt-2 mb-2 rounded-lg"
      ></Image>
    </TouchableOpacity>
)
  return (
    <SafeAreaView className="bg-[#2b2b2b]">
      <View className="rounded-lg shadow-lg flex justify-center items-center ">
        <View className="flex flex-row bg-[#5f5f5f]  p-6 rounded-lg w-11/12">
          {/* <Image source={logo} resizeMode='cover' alt="image" style={{ width: 90, height:90  }} /> */}
          <Text className={`text-2xl we  pt-[${Platform.OS == "ios" ? 8 : 6.5}] align-middle text-white`}>
            Welcome to Dine Time !
          </Text>

        </View>
      </View>


      <ScrollView>
        <ImageBackground
          source={banner}
          resizeMethod='cover'
          className="w-full h-52 items-center   rounded-lg justify-center"
        >

          <BlurView intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark" className="w-full p-4 shadow-lg">
            <Text className="text-center text-white text-3xl font-bold ">
              Dine With Your Loved ones
            </Text>
          </BlurView>          I

        </ImageBackground>
      </ScrollView>

      {restaurants.length > 0 ?
        <FlatList deta={restaurants} renderTtems={renderItems} horizontal contentContainerStyle={{padding:16}} showsHorizontalScrollIndicator={false}  scrollEnabled={true}  /> : <ActivityIndicator animating color={"#fb9b33"} />

      }
    </SafeAreaView>

  )
}

export default home