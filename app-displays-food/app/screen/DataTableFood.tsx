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
  name: string;
  email: string;
  role: string;
};

type SortConfig = {
  key: keyof User | null;
  direction: 'asc' | 'desc';
};

const dummy: User[] = [
  { id: 1, name: 'gilang', email: 'gilang@mail.com', role: 'admin' },
  { id: 2, name: 'yuda', email: 'yuda@mail.com', role: 'member' },
  { id: 3, name: 'ramdan', email: 'ramdan@mail.com', role: 'member' },
  { id: 4, name: 'ali', email: 'ali@mail.com', role: 'admin' },
  { id: 5, name: 'ko', email: 'ko@mail.com', role: 'member' }
];

export default function DataTableFood() {
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
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: ListRenderItemInfo<User>) => (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 1 }]}>{item.id}</Text>
      <Text style={[styles.cell, { flex: 3 }]}>{item.name}</Text>
      <Text style={[styles.cell, { flex: 4 }]}>{item.email}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.role}</Text>
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
              Name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 4 }}
            onPress={() => sortData('email')}
          >
            <Text style={[styles.cell, { flex: 4, fontWeight: 'bold' }]}>
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => sortData('role')}
          >
            <Text style={[styles.cell, { flex: 2, fontWeight: 'bold' }]}>
              Role
            </Text>
          </TouchableOpacity>
        </View>

        {/* Data */}
        <FlatList<User>
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
