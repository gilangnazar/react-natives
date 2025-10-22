import { View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../type";

type ProductListNavigationProp = StackNavigationProp<RootStackParamList, 'ProductList'>

type Props = {
  navigation: ProductListNavigationProp
}

export default function ProductList({navigation}: Props) {
  const sampleProducts: Products
}