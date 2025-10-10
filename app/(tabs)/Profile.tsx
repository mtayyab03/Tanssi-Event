import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { fontSize } from "@/constants/fontUtils";

// Components
import Screen from "@/components/common/Screen";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import ProfileList from "@/components/Specific/ProfileList";

const Profile = () => {
  const router = useRouter();
  return (
    <Screen style={styles.container}>
      <View
        style={{
          width: "85%",
          flexDirection: "row",
          alignItems: "center",
          marginVertical: RFPercentage(3),
          marginBottom: RFPercentage(6),
        }}
      >
        <TouchableOpacity
          style={[
            styles.iconButton,
            {
              backgroundColor: "none",
              padding: 2.5,
              marginRight: RFPercentage(1.5),
            },
          ]}
        >
          <Image source={icons.profile} style={styles.profile} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>John Doe</Text>
          <Text style={styles.profileDescTitle}>Jakarta, Ina</Text>
        </View>
      </View>

      {/* list */}
      <ProfileList
        icon={icons.language}
        title="Language - EN"
        onpress={() => router.push("/(screens)/Profile/Languages")}
      />
      <View style={styles.line} />
      <ProfileList
        icon={icons.info}
        title="About"
        onpress={() => router.push("/(screens)/Profile/AboutScreen")}
      />

      <View style={{ marginTop: RFPercentage(3) }} />
      <TouchableOpacity
        onPress={() => router.push("/(screens)/Profile/Packages")}
        activeOpacity={0.7}
        style={styles.promoteContainer}
      >
        <Image source={icons.promote} style={styles.avatar} />
        <View style={{ marginLeft: RFPercentage(2), width: "75%" }}>
          <Text style={[styles.headerTitle, { fontSize: fontSize(12) }]}>
            Promote an Event Internationally in top Events
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={styles.promoteContainer}>
        <Image source={icons.promote} style={styles.avatar} />
        <View style={{ marginLeft: RFPercentage(2), width: "75%" }}>
          <Text style={[styles.headerTitle, { fontSize: fontSize(12) }]}>
            Promote an Event in your country on the dance page
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: "80%",
          marginTop: RFPercentage(1),
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity activeOpacity={0.7} style={styles.logoutContainer}>
          <MaterialIcons name="logout" size={26} color={Colors.white} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purple,
    alignItems: "center",
    // paddingHorizontal: 15,
  },
  iconButton: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: "#9E70FF",
    padding: 8,
    borderRadius: 30,
  },

  profile: {
    width: fontSize(40),
    height: fontSize(40),
  },
  headerTitle: {
    fontSize: fontSize(18),
    fontFamily: FontFamily.medium,
    color: Colors.pureWhite,
  },
  profileDescTitle: {
    fontSize: fontSize(10),
    fontFamily: FontFamily.regular,
    color: "#C6ABFF",
    marginTop: RFPercentage(0.3),
  },
  line: {
    width: "85%",
    height: RFPercentage(0.1),
    backgroundColor: "#9E70FF",
    borderRadius: RFPercentage(0.5),
    marginVertical: RFPercentage(3),
  },
  avatar: {
    width: 24,
    height: 24,
  },
  promoteContainer: {
    width: "85%",
    backgroundColor: "#7A4CDC",
    borderWidth: RFPercentage(0.1),
    borderColor: "#9E70FF",
    padding: RFPercentage(2),
    justifyContent: "flex-start",
    borderRadius: RFPercentage(1.7),
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFPercentage(3),
  },
  logoutContainer: {
    width: "40%",
    padding: RFPercentage(0.8),
    backgroundColor: Colors.red,
    borderRadius: RFPercentage(0.5),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: RFPercentage(5),
  },

  logoutText: {
    marginLeft: RFPercentage(1),
    color: Colors.white,
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(1.8),
  },
});
