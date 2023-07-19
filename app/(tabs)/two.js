import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import {
  Button,
  Icon,
  List,
  ListItem,
  Spinner,
  Text,
  useTheme,
} from "@ui-kitten/components";

import IDCard from "@/components/IDCard";
import { callGetMyIdentityFunction } from "@/utils";
import { useEffect, useState } from "react";

import contractInfo from "../../assets/contractInfo.json";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  const theme = useTheme();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme["background-basic-color-1"],
      padding: 20,
      width: "100%",
    },
    item: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme["background-basic-color-3"],
      padding: 16,
      marginBottom: 12,
      borderRadius: 8,
    },
    title: {
      fontSize: 17,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });

  const data = [
    {
      title: "Proof of Adulthood",
      href: "/modal",
    },
    {
      title: "Basic Information",
      href: "/basicmodal",
    },
  ];

  const renderItem = ({ item, index }) => (
    <Link href={item?.href} asChild>
      <TouchableOpacity style={styles.item}>
        <Text category="h6" style={styles.title}>
          {item.title}
        </Text>
        <Icon
          name="chevron-right"
          style={{
            width: 32,
            height: 32,
          }}
          fill="#ffffff"
        />
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <List data={data} style={styles.container} renderItem={renderItem} />
    </View>
  );
}
