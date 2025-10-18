import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";

export default function SplashScreen() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/(tabs)/Home"); // Adjust path based on file location in app directory
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.background}
    >
      <Image source={icons.logo} style={styles.logo} resizeMode="contain" />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: RFPercentage(25),
    height: RFPercentage(25),
    marginBottom: 40,
  },
  title: {
    fontSize: fontSize(24),
    fontFamily: FontFamily.light,
    color: Colors.pureBlack,
    textAlign: "center",
    lineHeight: 45,
  },
});
