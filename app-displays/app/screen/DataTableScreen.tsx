import {
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const data: User[] = [
  { id: 1, name: 'gilang', email: 'gilang@mail.com', role: 'admin' },
  { id: 2, name: 'yuda', email: 'yuda@mail.com', role: 'member' },
  { id: 3, name: 'ramdan', email: 'ramdan@mail.com', role: 'member' },
  { id: 4, name: 'ali', email: 'ali@mail.com', role: 'admin' },
  { id: 5, name: 'ko', email: 'ko@mail.com', role: 'member' },
  { id: 6, name: 'ko', email: 'ko@mail.com', role: 'member' },
  { id: 7, name: 'ko', email: 'ko@mail.com', role: 'member' },
  { id: 8, name: 'gilang', email: 'gilang@mail.com', role: 'admin' },
  { id: 9, name: 'yuda', email: 'yuda@mail.com', role: 'member' },
  { id: 10, name: 'ramdan', email: 'ramdan@mail.com', role: 'member' },
  { id: 11, name: 'ali', email: 'ali@mail.com', role: 'admin' },
  { id: 12, name: 'ko', email: 'ko@mail.com', role: 'member' },
  { id: 13, name: 'ko', email: 'ko@mail.com', role: 'member' },
  { id: 14, name: 'ko', email: 'ko@mail.com', role: 'member' }
];

export default function DataTableScreen() {
  const renderItem = ({ item }: ListRenderItemInfo<User>) => (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 1 }]}>{item.id}</Text>
      <Text style={[styles.cell, { flex: 3 }]}>{item.name}</Text>
      <Text style={[styles.cell, { flex: 4 }]}>{item.email}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.role}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header Table */}
        <View style={[styles.row, styles.header]}>
          <Text style={[styles.cell, { flex: 1, fontWeight: 'bold' }]}>ID</Text>
          <Text style={[styles.cell, { flex: 3, fontWeight: 'bold' }]}>
            Name
          </Text>
          <Text style={[styles.cell, { flex: 4, fontWeight: 'bold' }]}>
            Email
          </Text>
          <Text style={[styles.cell, { flex: 2, fontWeight: 'bold' }]}>
            Role
          </Text>
        </View>

        {/* Data */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
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
  }
});
