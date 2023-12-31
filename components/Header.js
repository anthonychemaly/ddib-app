import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, useTheme } from "@ui-kitten/components";

const Header = ({ title = "UZH SSID" }) => {
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
        {title}
      </Text>
    </View>
  );
};

export default Header;
