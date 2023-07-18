import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";

import { MonoText } from "./StyledText";

const IDCard = ({ topInfo, details }) => {
  return (
    <View style={styles.card}>
      <View style={styles.logoRow}>
        <Image
          source={require("../assets/images/uzhlogo.png")}
          style={styles.logo}
        />
        <Text category="h6" style={styles.group}>
          Group 10
        </Text>
      </View>
      <View style={styles["row"]}>
        <Image
          source={require("../assets/images/picture.jpg")}
          style={{ width: 120, aspectRatio: 0.77 }}
        />
        <View style={styles.topInfo}>
          {topInfo?.map(({ label, value }, idx) => {
            return (
              <View key={idx}>
                <Text category="h6" style={styles.text}>
                  {label}:
                </Text>
                <MonoText style={styles.value}>{value}</MonoText>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles["details"]}>
        {details?.map(({ label, value }, idx) => {
          return (
            <View key={idx} style={styles.detailInfo}>
              <Text category="h6" style={styles.text}>
                {label}:
              </Text>
              <MonoText style={styles.value}>{value}</MonoText>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    padding: 24,
    borderRadius: 8,
    margin: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  logo: { width: 154, height: 70 },
  group: { color: "black", fontSize: 12 },
  logoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
  },
  text: {
    color: "#002B72",
    fontSize: 12,
  },
  value: {
    color: "#002B72",
    fontSize: 15,
    marginBottom: 4,
  },
  topInfo: {
    marginLeft: 16,
  },
  details: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  detailInfo: {
    marginBottom: 8,
  },
});

export default IDCard;
