import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

// Components
import Screen from "@/components/common/Screen";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";

const AddEvent = () => {
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        <Text>AddEvent</Text>
      </Screen>
    </LinearGradient>
  );
};

export default AddEvent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // paddingHorizontal: 15,
  },
  gradient: {
    flex: 1,
  },
});
