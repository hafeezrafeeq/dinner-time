import {
  View,
  Text,
  Platform,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { restaurants } from '../../store/restaurants';
import { Ionicons } from "@expo/vector-icons";

const logo = require("../../assets/images/dinetimelogo.png");
const banner = require("../../assets/images/homeBanner.png");

const Home = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity className="rounded-lg h-100 overflow-hidden mr-6 w-90 ">
      {/* Background Image */}
      <ImageBackground
        resizeMode="cover"
        source={{ uri: item.image }}
        className="h-40 w-full" >
      </ImageBackground>

      <BlurView intensity={20} tint="dark" className="flex-1 justify-end p-3">


        {/* Card Content */}
        <View className="p-4  pt-20">
          <Text className="text-xl mb-1 font-bold text-white">{item.name}</Text>
          <Text className="text-gray-300 text-md">{item.address}</Text>
          <View className="flex-row mt-2 ">
            <Text className="font-semibold text-gray-300 mr-2">
              Open : {item.opening} {"   "}
            </Text>
            <Text className="  text-gray-300">
              Close: {item.closing}
            </Text>
          </View>

          {/* Action Button */}
          <TouchableOpacity className="bg-[#fb9b33] mt-4 rounded-xl py-2 active:bg-[#e68a20]">
            <Text className="text-center text-2xl font-semibold text-white ">Reserve Now</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </TouchableOpacity >
  );

  return (
    <SafeAreaView className="bg-[#2b2b2b] flex-1">
      {/* Welcome Header */}


      <View className="flex  border-b border-1 border-stone-600 flex-row items-center justify-between px-4 h-24 pb-4 border-lg bg-[#2b2b2b] mb-3 ">
        <View>
          <Image source={logo} alt="image"
            style={{ width: 180, }}
            resizeMode="contain" />
        </View>

        <View>
          <Ionicons name="person-circle-outline" size={30} className="mt-2" color="#fb9b33" />
        </View>

      </View>





      {/* Banner */}
      <ScrollView>
        <View className="">
          <ImageBackground
            source={banner}
            resizeMethod='covero'
            className="flex-1 w-full h-60 bg-[#fb9b33] opacity-40 items-start rounded-lg justify-center"
          >

          </ImageBackground>
            <Text className={`absolute top-0 left-0 right-0  items-center text-5xl  font-bold opacity-100 p-6 text-stone-200`}>
              Welcome to Dine Time !
            </Text>


        </View>
      </ScrollView>

      {/* Restaurant List */}
      {
        restaurants?.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled
          />
        ) : (
          <ActivityIndicator animating color="#fb9b33" size="large" />
        )
      }
    </SafeAreaView >
  );
};

export default Home;
