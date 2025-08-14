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

const logo = require("../../assets/images/dinetimelogo.png");
const banner = require("../../assets/images/homeBanner.png");

const Home = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity classNam="h-100 bg-[#fb9b33]  justify-center ">
      <Image
        resizeMode='cover'
        source={{ uri: item.image }}
        className="h-1/2 w-full  mt-2 mb-2 mx-2 rounded-lg"
      />
      <Text className="text-white">{item.name}</Text> {/* Typo fixed */}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="bg-[#2b2b2b] flex-1">
      {/* Welcome Header */}
      <View className="rounded-lg shadow-lg flex justify-center items-center mt-4">
        <View className="flex flex-row bg-[#5f5f5f] p-6 rounded-lg w-11/12">
          <Text
            className={`text-2xl font-bold pt-[${Platform.OS === "ios" ? 8 : 6.5}] text-white`}
          >
            Welcome to Dine Time !
          </Text>
        </View>
      </View>

      {/* Banner */}
      <ScrollView>
        <ImageBackground
          source={banner}
          resizeMethod='cover'
          className="w-full h-52 items-center rounded-lg justify-center"
        >
          <BlurView
            intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark"
            className="w-full p-4 shadow-lg"
          >
            <Text className="text-center text-white text-3xl font-bold">
              Dine With Your Loved ones
            </Text>
          </BlurView>
        </ImageBackground>
      </ScrollView>

      {/* Restaurant List */}
      {restaurants?.length > 0 ? (
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
      )}
    </SafeAreaView>
  );
};

export default Home;
