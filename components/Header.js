import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, useTheme } from "@ui-kitten/components";

const Header = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    header: {
      backgroundColor: theme["background-basic-color-3"],
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.text} category="h5">
        UZH SSID
      </Text>
    </View>
  );
};

export default Header;
