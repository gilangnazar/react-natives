import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Gambar2() {
  const images = [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/400/600?random=2",
    "https://picsum.photos/400/600?random=3",
    "https://picsum.photos/400/600?random=4",
    "https://picsum.photos/400/600?random=5",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeri 5 Gambar</Text>

      {/* Scrollable gallery */}
      <ScrollView contentContainerStyle={styles.gallery}>
        {images.map((url, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(url)}>
            <Image source={{ uri: url }} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Fullscreen modal */}
      <Modal visible={!!selectedImage} transparent={true}>
        <View style={styles.modalBackground}>
          <Pressable
            style={styles.closeArea}
            onPress={() => setSelectedImage(null)}
          />
          <Image
            source={{ uri: selectedImage! }}
            style={styles.fullImage}
            resizeMode="contain"
          />
          <Pressable
            style={styles.closeButton}
            onPress={() => setSelectedImage(null)}
          >
            <Text style={styles.closeText}>✕</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 20 },
  title: { fontSize: 20, textAlign: "center", marginBottom: 15 },
  gallery: { alignItems: "center", paddingBottom: 20 },
  thumbnail: {
    width: 200,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "90%",
    height: "80%",
    borderRadius: 10,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 20,
    padding: 8,
  },
  closeText: {
    fontSize: 18,
    color: "white",
  },
  closeArea: {
    ...StyleSheet.absoluteFillObject,
  },
});
