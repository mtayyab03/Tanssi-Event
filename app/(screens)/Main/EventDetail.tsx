import React, { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// Components
import Screen from "@/components/common/Screen";
import AppButton from "@/components/common/AppButton";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import { fontSize } from "@/constants/fontUtils";
import icons from "@/constants/icons";

const { height } = Dimensions.get("window");

const EventDetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { image, title, location, date, description } = useLocalSearchParams();
  console.log("🔍 EventDetail params:", {
    image,
    title,
    location,
    date,
    description,
  });

  // Example event data (you can replace it with dynamic data later)
  const event = {
    image: icons.event2,
    title: "Summer Beats Festival",
    date: "October 15, 2025",
    description:
      "Join us for an unforgettable night of music, dance, and fun under the stars. Experience top DJs, live performances, and vibrant energy all night long!",
    location: "Berlin, Germany",
  };

  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        {/* Scroll content for safe view on small screens */}

        {/* Top Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={
              image as any // when passed as require()
            }
            style={styles.eventImage}
          />
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.8}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color={Colors.white} />
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.row}>
            <View style={styles.eventInfo}>
              <Ionicons
                name="location-outline"
                size={16}
                color={Colors.textColor}
              />
              <Text style={styles.eventText}>{location}</Text>
            </View>

            <View style={styles.eventInfo}>
              <View style={styles.divider} />
              <MaterialIcons
                name="calendar-month"
                size={16}
                color={Colors.textColor}
              />
              <Text style={styles.eventText}>{date}</Text>
            </View>
          </View>

          <Text style={styles.descText}>{description}</Text>
        </View>

        <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
          <AppButton
            title="View on Facebook"
            buttonColor={Colors.purple}
            loading={loading}
          />
        </TouchableOpacity>
      </Screen>
    </LinearGradient>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  gradient: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    height: height * 0.3,
    width: "100%",
  },
  eventImage: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: RFPercentage(2),
    left: RFPercentage(1.5),
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 20,
  },
  contentContainer: {
    width: "92%",
    alignSelf: "center",
    marginTop: RFPercentage(2),
  },
  titleText: {
    fontSize: fontSize(22),
    fontFamily: FontFamily.semiBold,
    color: Colors.white,
  },
  dateText: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.medium,
    color: Colors.purple,
    marginBottom: RFPercentage(2),
  },
  descText: {
    fontFamily: FontFamily.regular,
    color: Colors.textColor,
    fontSize: fontSize(13),
    lineHeight: RFPercentage(3),
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(3),
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  locationText: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.medium,
    color: Colors.white,
  },
  loginbutton: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: RFPercentage(4),
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFPercentage(1.5),
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
});
