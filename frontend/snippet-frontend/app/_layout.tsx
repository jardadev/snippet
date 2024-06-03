// import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import AuthButtons from "@/components/auth/AuthButtons";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
}
