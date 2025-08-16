import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import validationSchema from "../../utils/authSchema";





const logo = require("../../assets/images/dinetimelogo.png");
const frame = require("../../assets/images/Frame.png");


export default function signup() {
    const router = useRouter();
    const handleSignup = () => {
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#2b2b2b", flex: 1 }}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
            <ScrollView contentContainerStyle={{ height: "100%" }}>

                <View className="mt-2 flex flex-col items-center">
                    <Image source={logo} alt="image"
                        style={{ width: 250, height: 250, }}
                        resizeMode="contain" />

                    <View className="w-3/4 ">
                        <Text className="text-white text-2xl font-bold text-center mb-6">
                            Let's Get you Started
                        </Text>
                    </View>
                    <View className="w-5/6 justify-center flex items-center">
                        <Formik initialValues={{ email: "", pasword: "", }} validationSchema={validationSchema} onSubmit={handleSignup}>
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
                                    <View className="w-full">
                                        <Text className="text-[#f49b33] my-2">Emil</Text>
                                        <TextInput
                                            className="h-10 border border-white text-white rounded px-2"
                                            keyboardType="email.address"
                                            onChangeText={handleChange("emai")}
                                            values={values.email}
                                            onBlur={handleBlur("email")}
                                        />
                                        {touched.email && errors.email && (
                                            <Text className="text-red-500 text-xs mb-2">
                                                {errors.email}

                                            </Text>)}
                                    </View>

                                    {/*  */}

                                    <View className="w-full">
                                        <Text className="text-[#f49b33] my-2">Password</Text>
                                        <TextInput
                                            className="h-10 border border-white text-white rounded px-2"
                                            keyboardType="password.address"
                                            secureTextEntry
                                            onChangeText={handleChange("emai")}
                                            values={values.password}
                                            onBlur={handleBlur("password")}
                                        />
                                        {touched.password && errors.password && (
                                            <Text className="text-red-500 text-xs mb-2">
                                                {errors.password}

                                            </Text>)}
                                    </View>

                                    {/*  */}

                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        className=" bg-[#f49b33]  px-28 py-3 mt-5 rounded"
                                    >
                                        <Text className="text-white text-lg font-semibold text-center">
                                            Submit
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </Formik>


                        <TouchableOpacity onPress={() => router.push("/signin")}
                            className="flex flex-row items-center justify-center mt-10"
                        >
                            <Text className="text-white font-semibold mr-1 ">Already a User? </Text>
                            <Text className="text-base font-semibold underline text-[#f49b33]">Sign in</Text>

                        </TouchableOpacity>

                        <View>
                            <Text className="text-white text-center font-semibold mt-2 ">

                                <View className="border-b-2 border-[#f49b33] mb-1 w-20" />{" "} or{"  "}
                                <View className="border-b-2 border-[#f49b33] mb-1 w-20" />
                            </Text>


                            <TouchableOpacity onPress={() => router.push("/home")}
                                className="flex flex-row items-center justify-center mt-6"
                            >
                                <Text className="text-white font-semibold mr-1 ">be a</Text>
                                <Text className="text-base font-semibold underline text-[#f49b33]">Guset User</Text>

                            </TouchableOpacity>



                        </View>
                    </View>
                </View>

                <View className=" flex-1">
                    <Image source={frame} className="w-full h-full " resizeMode="contain" />
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}