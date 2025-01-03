import store from "@/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { View, StyleSheet, StatusBar } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView className="flex-1">
          <StatusBar
            animated={true}
            backgroundColor="transparent"
            barStyle={"dark-content"}
            translucent={true}
          />
          <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="dashboard/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="dashboard/[id]/index"
              
            />
          </Stack>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 20,
    backgroundColor: "#6200ea",
  },
});
