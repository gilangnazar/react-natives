import PrayerCard from '@/app/src/components/PrayerCard';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { fetchDataCalHijr, fetchDataSholat } from '../api/sholat';

import type { HijriahDate, SholatData } from '../types';

export default function PrayerScreen() {
  const [data, setData] = useState<SholatData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [hijriah, setHijriah] = useState<HijriahDate | null>(null);

  // get today date
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const currDate = `${yyyy}-${mm}-${dd}`;

  const getDataSholat = async () => {
    const res = await fetchDataSholat();
    setData(res?.data.data as SholatData);
  };
  const getDataHijr = async () => {
    const res = await fetchDataCalHijr();
    setHijriah(res?.data.data.date as HijriahDate);
  };

  useEffect(() => {
    getDataSholat();
    getDataHijr();
    setLoading(false);
  }, []);

  if (loading || !data || !hijriah) {
    return (
      <View style={[styles.center]}>
        <ActivityIndicator size={'large'} color={'#1e3c72'} />
        <Text style={{ marginTop: 10 }}>Memuat Jadwal...</Text>
      </View>
    );
  }
  return (
    <LinearGradient colors={['#5682B1', '#739EC9']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[styles.container]}>
        <Text style={[styles.title]}>Jadwal Sholat</Text>
        <Text style={[styles.lokasi]}>{data?.lokasi}</Text>
        <Text style={[styles.date]}>
          {data?.jadwal.tanggal}, {hijriah[1]}
        </Text>

        <PrayerCard name='Subuh' time={data?.jadwal.subuh} color='#2196f3' />
        <PrayerCard name='Zhuhur' time={data?.jadwal.dzuhur} color='#4caf50' />
        <PrayerCard name='Ashar' time={data?.jadwal.ashar} color='#ff9800' />
        <PrayerCard
          name='Maghrib'
          time={data?.jadwal.maghrib}
          color='#f44336'
        />
        <PrayerCard name='Isya' time={data?.jadwal.isya} color='#9c27b0' />
      </ScrollView>
    </LinearGradient>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    marginTop: 25,
  },
  date: {
    fontSize: 14,
    color: '#f1f1f1',
    marginBottom: 25,
  },
  lokasi: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
});
