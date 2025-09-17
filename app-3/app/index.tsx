import PrayerScreen from "@/app/src/screens/PrayerScreen";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#1e3c72"} />
        <PrayerScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
