// tabs/_layout.tsx
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Prayer') iconName = 'ios-sunny';
          else if (route.name === 'Surah') iconName = 'book';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name='Prayer' />
      <Tabs.Screen name='Surah' />
    </Tabs>
  );
}
