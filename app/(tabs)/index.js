import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Spinner, useTheme } from "@ui-kitten/components";

import IDCard from "@/components/IDCard";
import { View } from "@/components/Themed";

import contractInfo from "../../assets/contractInfo.json";

import { callGetMyIdentityFunction } from "@/utils";

export default function TabOneScreen() {
  const theme = useTheme();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme["background-basic-color-1"],
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });

  const tryGetMyIdentity = async () => {
    const response = await callGetMyIdentityFunction(contractInfo?.contractId);
    setInfo(response);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    tryGetMyIdentity();
    () => {
      setLoading(true);
      setInfo([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Spinner size="giant" />
      ) : (
        <IDCard topInfo={info[0]} details={info[1]} imgUrl={info[2]} />
      )}
    </View>
  );
}
