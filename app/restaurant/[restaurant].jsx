import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { collection, getDoc, query } from 'firebase/firestore';
const logo = require("../../assets/images/dinetimelogo.png");

const Restaurant = () => {
    const { restaurant } = useLocalSearchParams();

    const [restaurantData, setRestaurantData] = useState({});
    const [carouselData, setCarouselData] = useState({});
    const [SlotsData, setSlotstData] = useState({});

    const getRestaurantData = async () => {
        try {
            const restaurant = query(collection(db, "restaurant"), where("name", "==", restaurant))
            const restaurantSnapshot = await getDoc(restaurantQuery);

            if (restaurantSnapshot.empty) {
                console.log("No matching restaurant found");
                return
            }

            for (const doc of restaurantSnapshot.docs) {
                const restaurantData = doc.data();
                setRestaurantData(restaurantData)

                const carouselQurey = query(
                    collection(db, "carousel"),
                    where("name", "==", restaurant)
                );


            }

        } catch (error) {

        }
    }



    return (
        <SafeAreaView className="bg-[#2b2b2b] flex-1">
            {/* Welcome Header */}


            <View className="flex  border-b border-1 border-stone-600 flex-row items-center justify-between px-8 h-24 pb-4 border-lg bg-[#2b2b2b] mb-3 ">
                <View>
                    <Image source={logo} alt="image"
                        style={{ width: 180, }}
                        resizeMode="contain" />
                </View>

                <View>
                    <Ionicons name="person-circle-outline" size={30} className="mt-2" color="#fb9b33" />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Restaurant