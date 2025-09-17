import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

type PrayerCardProps = {
  name: string;
  time: string;
  color: string;
};

export default function PrayerCard({ name, time, color }: PrayerCardProps) {
  return (
    <Card style={[styles.card, { borderLeftColor: color }]}>
      <Card.Content style={[styles.row]}>
        <Text style={[styles.name]}>{name}</Text>
        <Text style={[styles.time, { color: color }]}>{time}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 8,
    borderRadius: 15,
    borderLeftWidth: 6,
    backgroundColor: "#fff",
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
