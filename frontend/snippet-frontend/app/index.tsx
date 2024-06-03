import { Text, View } from "react-native";
import AuthButtons from "@/components/auth/AuthButtons";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to the Expo Router example</Text>
      <AuthButtons />
    </View>
  );
}
