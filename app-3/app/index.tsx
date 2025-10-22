// import PrayerScreen from "@/app/src/screens/PrayerScreen";
import { Link } from 'expo-router';
import { Pressable, SafeAreaView, StatusBar, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#1e3c72'} />
        <Link href={'/src/screens/PrayerScreen'} asChild>
          <Pressable>
            <Text>Go to Prayer Screen</Text>
          </Pressable>
        </Link>

        <Link href={'/src/screens/SurahScreen'} asChild>
          <Pressable>
            <Text>Go to Surah Screen</Text>
          </Pressable>
        </Link>
      </SafeAreaView>
    </PaperProvider>
  );
}
