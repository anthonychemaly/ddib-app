import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useTheme } from "@ui-kitten/components";
import {
  callGetIsAdultFunction,
  callGetMyIdentityTokenIdFunction,
} from "@/utils";

import contractInfo from "../assets/contractInfo.json";
import { useEffect, useState } from "react";

export default function ModalScreen() {
  const theme = useTheme();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme["background-basic-color-1"],
    },
  });

  const tryGetMyIdentity = async () => {
    const response = await callGetIsAdultFunction(contractInfo?.contractId);
    setInfo(response);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    tryGetMyIdentity();
    () => {
      setLoading(true);
      setInfo(null);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{info?.toString()}</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
