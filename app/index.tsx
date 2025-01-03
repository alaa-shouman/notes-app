import { useRouter } from "expo-router";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Button } from "react-native-paper";

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate authentication and navigation to dashboard
    console.log("Login");
    router.replace("./dashboard");
  };

  return (
    <View className="flex items-center justify-center h-full bg-yellow-100 px-14">
      <Text style={styles.title}>Welcome!</Text>
      <Button
        mode="contained"
        onPress={handleLogin}
        labelStyle={{ color: "white" }}
        buttonColor="#0f172a"
      >
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
