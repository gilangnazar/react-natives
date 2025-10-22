import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const dummyData = [
  {
    id: '1',
    name: 'Kopi Arabica Gayo',
    price: 55000,
    description: 'Kopi khas Aceh dengan aroma kuat dan cita rasa lembut.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '2',
    name: 'Teh Hijau Jepang',
    price: 45000,
    description: 'Teh premium dengan rasa segar dan menenangkan.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '3',
    name: 'Coklat Almond',
    price: 35000,
    description: 'Coklat manis dengan campuran kacang almond renyah.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '4',
    name: 'Keripik Pisang',
    price: 25000,
    description: 'Keripik pisang renyah dengan rasa manis alami.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '5',
    name: 'Susu Oat Organik',
    price: 65000,
    description: 'Susu nabati tanpa tambahan gula.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '6',
    name: 'Madu Hutan Murni',
    price: 75000,
    description: 'Madu alami dari hutan tropis Indonesia, tanpa campuran.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '7',
    name: 'Selai Kacang Premium',
    price: 48000,
    description: 'Selai kacang lembut dengan rasa gurih alami.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '8',
    name: 'Granola Mix Buah Kering',
    price: 55000,
    description: 'Campuran oat, kacang, dan buah kering yang menyehatkan.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '9',
    name: 'Nasi Goreng Instan',
    price: 30000,
    description: 'Nasi goreng siap saji dengan bumbu khas nusantara.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  },
  {
    id: '10',
    name: 'Rendang Sapi Kaleng',
    price: 85000,
    description:
      'Rendang khas Minang dengan daging sapi empuk dan bumbu kental.',
    image: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_640.jpg'
  }
];

export default function Products() {
  const [search, setSearch] = useState('');

  const filterData = dummyData.filter(
    item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rp {item.price.toLocaleString()}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <TextInput
        style={styles.search}
        placeholder='Search...'
        value={search}
        onChangeText={setSearch}
      />

      {/* List produk */}
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  },
  search: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#FF9933'
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    color: '#4CAF50',
    marginTop: 2
  },
  desc: {
    color: '#666',
    fontSize: 12
  }
});
