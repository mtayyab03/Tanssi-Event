import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import icons from "@/constants/icons";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFill}>
            {/* Gradient Base */}
            <LinearGradient
              colors={["#0A0F2D", "#0B1D4A"]}
              style={StyleSheet.absoluteFill}
            />
          </View>
        ),
        tabBarStyle: {
          borderTopWidth: 0,
          height: 70,
          position: "absolute",
        },
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: "#8e8e93",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIcon: ({ focused }) => {
          let iconSrc;

          if (route.name === "Home")
            iconSrc = focused ? icons.home : icons.homeGrey;
          else if (route.name === "Chat")
            iconSrc = focused ? icons.chat : icons.chatgrey;
          else iconSrc = focused ? icons.proficon : icons.proficonGrey;
          return (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <>
                  {/* Glow mask image */}
                  <Image
                    source={icons.mask}
                    style={{
                      position: "absolute",
                      bottom: -43,
                      width: 100,
                      height: 100,
                      resizeMode: "contain",
                      marginLeft: RFPercentage(1.8),
                    }}
                  />

                  {/* Line indicator */}
                  <View
                    style={{
                      position: "absolute",
                      top: -7,
                      width: 22,
                      height: 3,
                      borderRadius: 2,
                      backgroundColor: "#9B5BFF", // purple line
                    }}
                  />
                </>
              )}
              <Image
                source={iconSrc}
                style={{
                  width: 26,
                  height: 26,
                  resizeMode: "contain",
                }}
              />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="Home" options={{ title: "Home" }} />
      <Tabs.Screen name="Chat" options={{ title: "Message" }} />
      <Tabs.Screen name="Profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  glow: {
    position: "absolute",
    bottom: -25,
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
  },
});
