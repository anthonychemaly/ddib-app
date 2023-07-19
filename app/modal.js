import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";

import { Icon, Spinner, Text, useTheme } from "@ui-kitten/components";
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
      {loading ? (
        <Spinner size="large" />
      ) : (
        <View style={styles.container}>
          <Icon
            name={info ? "checkmark-circle-2-outline" : "slash-outline"}
            style={{
              width: 100,
              height: 100,
              marginBottom: 32,
            }}
            fill="#ffffff"
          />
          <Text category="h4">
            {info ? "You are an adult" : "You are not an adult"}
          </Text>
        </View>
      )}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
