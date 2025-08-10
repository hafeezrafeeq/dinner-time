import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import logo from '../assets/images/dinetimelogo.png';

const frame = require("../assets/images/Frame.png")
const logo = require("../assets/images/dinetimelogo.png");
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: "#2b2b2b", flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>

        <View className="m-2 flex flex-col justify-centerr items-center">

          <Image source={logo} alt="image" style={{ width: 300, height: 300 }} />


          <View className="w-3/4 ">

            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className=" bg-[#f49b33]  px-28 py-3 mt-5 rounded"
            >
              <Text className="text-white text-lg font-semibold text-center">
                Sign Up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="border-2 border-[#f49b33]  px-28 py-3 mt-5 rounded"
            >
              <Text className="text-[#F49b33] text-lg font-semibold text-center">
                Guest User
              </Text>
            </TouchableOpacity>

          </View>


          <View className="">
            <Text className="text-white text-center text-base font-semibold my-4">
          
              <View className="border-b-2 border-[#f49b33] mb-1 w-20" />{" "} or{"  "}
              <View className="border-b-2 border-[#f49b33] mb-1 w-20" />
            </Text>


            <TouchableOpacity onPress={() => router.push("/signin")}
              className="flex flex-row items-center justify-center mt-1 "
            >
              <Text className="text-white font-semibold mr-1 ">Already a User? </Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">Sign in</Text>

            </TouchableOpacity>

          </View>
        </View>

        <View className=" flex-1">
          <Image source={frame} className="w-full h-full " resizeMode="contain" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}