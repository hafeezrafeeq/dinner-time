import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
  <Stack screenOptions={{ headerShown: false}}>
    <Stack name="index"/>
    <Stack name="(tabs)"/>
  </Stack>
    );
}
