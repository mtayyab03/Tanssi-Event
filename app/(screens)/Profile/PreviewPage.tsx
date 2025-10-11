import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";
//Components
import Screen from "@/components/common/Screen";
import AppButton from "@/components/common/AppButton";
import AppHeader from "@/components/common/AppHeader";

const PreviewPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <ImageBackground
      source={icons.Previewbg}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <Screen style={styles.container}>
        <AppHeader title="Preview" onPress={handleBack} />

        <View style={styles.eventCard}>
          <Image source={icons.event1} style={styles.eventImage} />
          <Text style={styles.eventTitle}>KZL10 meets All For Kizomba</Text>

          <View style={styles.row}>
            <View style={styles.eventInfo}>
              <Ionicons
                name="location-outline"
                size={16}
                color={Colors.textColor}
              />
              <Text style={styles.eventText}>Ottawa, Canada</Text>
            </View>

            <View style={styles.eventInfo}>
              <View style={styles.divider} />
              <MaterialIcons
                name="calendar-month"
                size={16}
                color={Colors.textColor}
              />
              <Text style={styles.eventText}>April 03, 2024</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: RFPercentage(2),
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/Home")}
            style={styles.loginbutton}
            activeOpacity={0.7}
          >
            <AppButton
              title="Cancel"
              buttonColor={Colors.primary}
              buttonStyle={{
                borderWidth: RFPercentage(0.1),
                borderColor: Colors.stroke,
              }}
            />
          </TouchableOpacity>
          {/* button */}
          <TouchableOpacity
            onPress={() => router.push("/(screens)/Profile/PaymentMethod")}
            style={styles.loginbutton}
            activeOpacity={0.7}
          >
            <AppButton title="Confirm" buttonColor={Colors.purple} />
          </TouchableOpacity>
        </View>
      </Screen>
    </ImageBackground>
  );
};

export default PreviewPage;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  loginbutton: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // alignItems: "center",
    // paddingHorizontal: 15,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: fontSize(16),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginLeft: RFPercentage(1.5),
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

  eventCard: {
    width: "90%",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 8,
    marginTop: RFPercentage(3),
    paddingBottom: RFPercentage(1.5),
  },
  eventImage: {
    width: "100%",
    height: RFPercentage(24.5),
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginTop: 15,
    marginLeft: RFPercentage(0.5),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFPercentage(1.5),
    marginHorizontal: RFPercentage(0.5),
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    width: RFPercentage(0.1),
    height: RFPercentage(1.6),
    backgroundColor: Colors.stroke,
    marginRight: RFPercentage(1.5),
  },
  eventText: {
    fontFamily: FontFamily.regular,
    color: Colors.textColor,
    fontSize: fontSize(12),
    marginLeft: RFPercentage(0.5),
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1.3),
    gap: RFPercentage(0.3),
  },
  dot: {
    width: RFPercentage(0.8),
    height: RFPercentage(0.8),
    borderRadius: RFPercentage(2),
    backgroundColor: Colors.primary,
    marginHorizontal: RFPercentage(0.2),
  },
  activeDot: {
    width: RFPercentage(2),
    backgroundColor: Colors.purple,
  },
});
