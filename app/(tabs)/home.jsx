import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const logo = require("../../assets/images/dinetimelogo.png")
const bgImage = require("../../assets/images/homeBanner.png")
const home = () => {
  return (
    <SafeAreaView className="bg-[#2b2b2b]">
      <View className="  rounded-lg shadow-lg justify-around items-center ">
        <View className="flex flex-row bg-[#5f5f5f] w-11/12">
          <Text className={`text-lg h-10 pt-[${Platform.OS == "ios" ? 8 : 6.5}] align-middle text-white`}>
            Welcome ! {' '}
          </Text>
          <Image sourse={logo} resizeMode="cover" className="w-20 h-12" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default home