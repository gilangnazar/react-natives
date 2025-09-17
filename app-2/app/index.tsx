import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Link href="/gambar" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Single Photo</Text>
        </Pressable>
      </Link>

      <Link href="/gambar2" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Gallery</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  button: {
    width: "80%",
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
