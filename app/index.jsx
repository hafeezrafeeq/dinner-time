import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-stone-50">
      <Text className="text-1xl font-bold text-blue-500">
        hello expo
      </Text>

      <TouchableOpacity onPress={() => router.push("/Login-Screen")}>
        <Text>
          Login Page Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}