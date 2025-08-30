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
import React, { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "../../config/firebaseConfig"
import { router } from 'expo-router';
// import uploadData from '../../config/bulkupload';



const logo = require("../../assets/images/dinetimelogo.png");
const banner = require("../../assets/images/homeBanner.png");

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  // const router = useRouter();
  //   useEffect(() => {
  // uploadData();
  // }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity className="rounded-lg w-95  overflow-hidden mr-6">
        {/* Background Image */}
        <ImageBackground
          resizeMode="cover"
          source={{ uri: item.image }}
          className="h-40 w-full">
        </ImageBackground>

        {/* Card Content */}
        <View className="p-4 bg-[#444444]">
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
          <TouchableOpacity onPress={() => router.push(`/restaurants/${item.name}`)} className="bg-[#fb9b33] mt-4 rounded-md py-2 ">
            <Text className="text-center text-xl font-bold text-white ">Reserve Now</Text>
          </TouchableOpacity>
        </View>

      </TouchableOpacity>
    );
  }

  const getRestaurants = async () => {   // 👈 corrected spelling
    try {
      const q = query(collection(db, "restaurants")); // 👈 confirm Firebase collection ka naam
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRestaurants(list);
      console.log("Fetched restaurants:", list);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  useEffect(() => {
    getRestaurants();  // 👈 same spelling here
  }, []);

  return (
    <SafeAreaView className="bg-[#2b2b2b] flex-1">
      {/* Welcome Header */}


      <View className="flex  border-b border-1 border-stone-600 flex-row items-center justify-between px-8 h-24 pb-4 border-lg bg-[#2b2b2b] mb-3 ">
        <View>
          <Image source={logo} alt="image"
            style={{ width: 180, }}
            resizeMode="contain" />
        </View>

        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Ionicons name="person-circle-outline" size={30} className="mt-2" color="#fb9b33" />
        </TouchableOpacity>

      </View>



      <ScrollView stickyHeaderIndices={[0]}>

        {/* Banner */}

        <View className="">
          <ImageBackground
            source={banner}
            resizeMethod='covero'
            className="flex-1 w-full h-60 items-start bg-[#2b2b2b] rounded-lg justify-center"
          >
            <BlurView
              intensity={Platform.OS === "android" ? 100 : 25}
              tint="dark"
              className="w-full p-4 shadow-lg"
            >
              <Text className="text-center text-3xl font-bold text-white">
                Dine with your loved ones
              </Text>
            </BlurView>

          </ImageBackground>


        </View>


        <View className="p-4 bg-[#2b2b2b] justify-center flex-row items-center">
          <Text className="text-3xl text-[#d2d2d2] text-center mr-2 font-semibold">
            Special Discount
          </Text>
        </View>


        {/* Restaurant List */}
        {
          restaurants?.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderItem}

              horizontal
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
            />
          ) : (
            <ActivityIndicator animating color="#fb9b33" size="large" />
          )
        }


        {/* Restaurant List */}

        <View className="p-4 bg-[#2b2b2b] flex-row justify-center items-center">
          <Text className="text-3xl text-[#d2d2d2]  mr-2 font-semibold">
            Our Restaurants
          </Text>
        </View>


        {
          restaurants?.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
            />
          ) : (
            <ActivityIndicator animating color="#fb9b33" size="large" />
          )
        }
      </ScrollView>
    </SafeAreaView >
  );
};







export default Home;
