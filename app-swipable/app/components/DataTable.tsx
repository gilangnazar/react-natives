import { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

type User = {
  id: number;
  productName: string;
  price: string;
  qty: string;
};

type SortConfig = {
  key: keyof User | null;
  direction: 'asc' | 'desc';
};

const dummy = [
  { id: 1, productName: 'Kopi Arabica Gayo', price: 55000, qty: 20 },
  { id: 2, productName: 'Teh Hijau Jepang', price: 45000, qty: 15 },
  { id: 3, productName: 'Beras Pandan Wangi 5kg', price: 68000, qty: 30 },
  { id: 4, productName: 'Minyak Goreng Sawit 2L', price: 34000, qty: 50 },
  { id: 5, productName: 'Gula Pasir Putih 1kg', price: 16000, qty: 40 },
  { id: 6, productName: 'Susu UHT Full Cream 1L', price: 23000, qty: 25 },
  { id: 7, productName: 'Mie Instan Goreng', price: 3500, qty: 100 },
  { id: 8, productName: 'Cokelat Batang Premium', price: 32000, qty: 18 },
  { id: 9, productName: 'Kacang Almond 250gr', price: 75000, qty: 10 },
  { id: 10, productName: 'Keripik Pisang Cokelat', price: 22000, qty: 35 },
  { id: 11, productName: 'Air Mineral 1.5L', price: 6000, qty: 80 },
  { id: 12, productName: 'Roti Tawar Kupas', price: 18000, qty: 25 },
  { id: 13, productName: 'Keju Cheddar 250gr', price: 42000, qty: 15 },
  { id: 14, productName: 'Mentega 200gr', price: 26000, qty: 30 },
  { id: 15, productName: 'Sosis Ayam 500gr', price: 48000, qty: 20 },
  { id: 16, productName: 'Nugget Ayam 1kg', price: 62000, qty: 15 },
  { id: 17, productName: 'Sambal Terasi Botol', price: 15000, qty: 40 },
  { id: 18, productName: 'Kecap Manis 620ml', price: 21000, qty: 35 },
  { id: 19, productName: 'Saos Tomat 500ml', price: 16000, qty: 25 },
  { id: 20, productName: 'Sereal Cokelat 300gr', price: 38000, qty: 22 },
  { id: 21, productName: 'Biskuit Gandum', price: 24000, qty: 50 },
  { id: 22, productName: 'Kerupuk Udang 200gr', price: 17000, qty: 40 },
  { id: 23, productName: 'Madu Murni 250ml', price: 65000, qty: 12 },
  { id: 24, productName: 'Kopi Robusta Lampung', price: 49000, qty: 18 },
  { id: 25, productName: 'Teh Hitam Celup 25s', price: 19000, qty: 35 },
  { id: 26, productName: 'Susu Bubuk 400gr', price: 53000, qty: 20 },
  { id: 27, productName: 'Beras Merah 5kg', price: 75000, qty: 10 },
  { id: 28, productName: 'Cokelat Bubuk 100gr', price: 27000, qty: 28 },
  { id: 29, productName: 'Kacang Mete 250gr', price: 89000, qty: 8 },
  { id: 30, productName: 'Keripik Singkong Pedas', price: 18000, qty: 40 },
  { id: 31, productName: 'Air Mineral 600ml', price: 4000, qty: 100 },
  { id: 32, productName: 'Roti Cokelat Isi', price: 12000, qty: 45 },
  { id: 33, productName: 'Keju Slice 10s', price: 31000, qty: 25 },
  { id: 34, productName: 'Mentega Tawar 500gr', price: 48000, qty: 18 },
  { id: 35, productName: 'Sosis Sapi 1kg', price: 72000, qty: 10 },
  { id: 36, productName: 'Nugget Ikan 500gr', price: 54000, qty: 14 },
  { id: 37, productName: 'Sambal Extra Pedas', price: 17000, qty: 35 },
  { id: 38, productName: 'Kecap Asin 600ml', price: 20000, qty: 30 },
  { id: 39, productName: 'Saos Cabai 500ml', price: 18000, qty: 25 },
  { id: 40, productName: 'Sereal Madu 250gr', price: 36000, qty: 22 },
  { id: 41, productName: 'Biskuit Cokelat', price: 25000, qty: 40 },
  { id: 42, productName: 'Kerupuk Ikan 250gr', price: 19000, qty: 35 },
  { id: 43, productName: 'Madu Hutan 500ml', price: 98000, qty: 8 },
  { id: 44, productName: 'Kopi Luwak Premium', price: 120000, qty: 5 },
  { id: 45, productName: 'Teh Rosella 20s', price: 32000, qty: 15 },
  { id: 46, productName: 'Susu Skim 1L', price: 27000, qty: 20 },
  { id: 47, productName: 'Beras Hitam 5kg', price: 88000, qty: 10 },
  { id: 48, productName: 'Cokelat Spread 350gr', price: 41000, qty: 25 },
  { id: 49, productName: 'Kacang Tanah 500gr', price: 28000, qty: 30 },
  { id: 50, productName: 'Keripik Kentang Original', price: 23000, qty: 50 }
];

export default function DataTable() {
  const [data, setData] = useState<User[]>(dummy);
  const [search, setSearch] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc'
  });

  const sortData = (key: keyof User) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sorted);
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter(
    item =>
      item.productName.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toLowerCase().includes(search.toLowerCase()) ||
      item.qty.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: ListRenderItemInfo<User>) => (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 1 }]}>{item.id}</Text>
      <Text style={[styles.cell, { flex: 3 }]}>{item.productName}</Text>
      <Text style={[styles.cell, { flex: 4 }]}>{item.price}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.qty}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.search}
        placeholder='search...'
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView>
        {/* Header Table */}
        <View style={[styles.row, styles.header]}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => sortData('id')}>
            <Text style={[styles.cell, { flex: 1, fontWeight: 'bold' }]}>
              ID
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 3 }}
            onPress={() => sortData('name')}
          >
            <Text style={[styles.cell, { flex: 3, fontWeight: 'bold' }]}>
              Product Name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 4 }}
            onPress={() => sortData('email')}
          >
            <Text style={[styles.cell, { flex: 4, fontWeight: 'bold' }]}>
              Price
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => sortData('role')}
          >
            <Text style={[styles.cell, { flex: 2, fontWeight: 'bold' }]}>
              QTY
            </Text>
          </TouchableOpacity>
        </View>

        {/* Data */}
        <FlatList<User>
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={true}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 5,
    alignItems: 'center'
  },

  header: {
    backgroundColor: '#4caf50'
  },
  cell: {
    fontSize: 14,
    paddingHorizontal: 4,
    color: '#333'
  },
  search: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 6,
    fontSize: 14
  }
});
