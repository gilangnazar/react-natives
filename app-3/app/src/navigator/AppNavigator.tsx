import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrayerScreen from '../screens/PrayerScreen';
import SurahScreen from '../screens/SurahScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === 'Prayer') {
            iconName = focused ? 'ios-sunny' : 'ios-sunny-outline';
          }
          if (route.name === 'Surah') {
            iconName = focused ? 'book' : 'book-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Prayer' component={PrayerScreen} />
      <Tab.Screen name='Surah' component={SurahScreen} />
    </Tab.Navigator>
  );
}
