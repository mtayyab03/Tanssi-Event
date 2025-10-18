import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "@/components/common/Screen";
import AppHeader from "@/components/common/AppHeader";
import AppButton from "@/components/common/AppButton";
import InputField from "@/components/common/InputField";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";

const AddEvent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  const handleSubmit = () => {
    if (!link.trim()) {
      Alert.alert("Missing Link", "Please enter a Facebook event link.");
      return;
    }

    // Optional: validate link pattern
    const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/events\/\d+/;
    if (!facebookRegex.test(link.trim())) {
      Alert.alert("Invalid Link", "Please enter a valid Facebook event URL.");
      return;
    }

    setLoading(true);

    // Simulate sending for review
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "Event Sent for Review",
        "Your event has been sent to admin for approval. Once approved, it will be published.",
        [{ text: "OK" }]
      );
    }, 2000);
  };
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        <View style={{ width: "90%", marginTop: RFPercentage(2) }}>
          <Text style={styles.titleText}>Add Event</Text>
          <Text style={styles.packageDesc}>
            Paste your Facebook event link below”
          </Text>
        </View>

        <View style={{ marginTop: RFPercentage(5) }} />
        <InputField
          label="Facebook link of Event"
          icon={icons.link}
          value={link}
          placeholder="www.example.com"
          onChangeText={setLink}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.loginbutton}
          activeOpacity={0.7}
        >
          <AppButton
            title="Submit for Review"
            buttonColor={Colors.purple}
            loading={loading}
          />
        </TouchableOpacity>
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
  titleText: {
    fontSize: fontSize(20),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
  },
  loginbutton: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(4),
  },
  packageDesc: {
    fontFamily: FontFamily.regular,
    color: Colors.textColor,
    fontSize: fontSize(12),
    lineHeight: RFPercentage(3),
    marginVertical: RFPercentage(1),
  },
});
