import { Dimensions, Image, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Gambar() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Page with Gambar</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: "75%", height: 500 }}
          resizeMode="contain"
          source={require("@/assets/images/gambar2.jpg")}
        />
      </View>
    </View>
  );
}
