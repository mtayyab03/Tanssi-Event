import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

// Components
import { ThemedText } from "@/components/themed-text";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";

type AppHeaderProps = {
  title: string;
  onPress: () => void;
};

const AppHeader: React.FC<AppHeaderProps> = ({ title, onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.iconButton}>
        <MaterialIcons
          name="arrow-back-ios-new"
          size={20}
          color={Colors.white}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default AppHeader;
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
    width: "90%",
  },
  iconButton: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    padding: 8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: fontSize(16),
    fontFamily: FontFamily.semiBold,
    color: "#fff",
    marginLeft: RFPercentage(1.5),
  },
});
