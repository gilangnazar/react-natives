import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text } from 'react-native-paper';

import {
  Scheherazade_400Regular,
  useFonts,
} from '@expo-google-fonts/scheherazade';

import type { AyatItem } from '@/app/src/types';
import { fetchDataSurah } from '../api/sholat';

let [fontsLoaded] = useFonts({
  Scheherazade_400Regular,
});

export default function SurahScreen() {
  const [ayat, setAyat] = useState<AyatItem[]>([]);
  const [namaSurat, setNamaSurat] = useState('');
  const [loading, setLoading] = useState(true);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getAyat = async () => {
    try {
      const res = await fetchDataSurah();
      setAyat(res.data);
      setNamaSurat(res.info.surat.nama.id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const playAudio = async (url) => {
    try {
      if (sound) {
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
      }
      const { sound: newSound } = await Audio.Sound.createAsync({ uri: url });
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish()) {
          setIsPlaying(false);
        }
      });
    } catch (error) {
      console.error('error playing audio: ', error);
    }
  };

  useEffect(() => {
    getAyat();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size='large' color='#1e3c72' />
        <Text>Memuat</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Surat {namaSurat}</Text>

      {ayat.map((item) => (
        <View key={item.id} style={styles.ayatCard}>
          <Text
            style={[{ fontFamily: 'Scheherazade_400Regular' }, styles.arab]}
          >
            {item.arab} <Text style={styles.ayatnumber}>{item.ayah}</Text>
          </Text>

          <Text style={styles.terjemah}>{item.text}</Text>

          <Button
            mode='contained'
            styles={styles.audioBtn}
            onPress={() => playAudio(item.audio)}
          >
            Putar ayat {item.ayah}
          </Button>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e3c72',
  },
  ayatCard: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 3,
  },
  arab: {
    fontSize: 28,
    textAlign: 'right',
    color: '#333',
    marginBottom: 10,
    lineHeight: 40,
  },
  terjemah: {
    fontSize: 16,
    textAlign: 'left',
    color: '#555',
    marginBottom: 10,
  },
  audioBtn: {
    backgroundColor: '#bafd57ff',
    borderRadius: 10,
    color: 'white',
  },
  ayatnumber: {
    backgroundColor: '#ffd54f',
    color: '#000',
    fontSize: 16,
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: 'center',
  },
  ketSurat: {
    fontSize: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
});
