import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

// Components
import Screen from "@/components/common/Screen";
import EventCarousel from "@/components/Specific/EventCarousel";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";
import {
  eventDataHome,
  eventData,
  categoryData,
  eventDataByCategory,
  topEventsDataByCategory,
  CategoryKey,
} from "@/constants/dummyData";

const categories = [
  {
    id: "1",
    title: "Bachata",
    image: icons.bachata,
  },
  {
    id: "2",
    title: "Kizomba",
    image: icons.kizomba,
  },
  { id: "3", title: "Salsa", image: icons.salsa },
  {
    id: "4",
    title: "Brazilian Zouk",
    image: icons.event12,
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const router = useRouter();

  const handlePress = (item: any) => {
    setSelectedId(item.id);

    const normalizedKey = item.title.trim().toLowerCase();

    const categoryEvents =
      Object.entries(eventDataByCategory).find(
        ([key]) => key.toLowerCase() === normalizedKey
      )?.[1] || [];

    console.log("Title:", item.title);
    console.log("Keys:", Object.keys(eventDataByCategory));
    console.log("Found Events:", categoryEvents);

    router.push({
      pathname: "/(screens)/Main/EventsScreen",
      params: {
        category: item.title,
        events: JSON.stringify(categoryEvents),
      },
    });
  };

  const [activeTab, setActiveTab] = useState<"parties" | "festivals">(
    "parties"
  );
  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={icons.menu} style={styles.avatar} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Top Events</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={icons.search} style={styles.avatar} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iconButton,
                { backgroundColor: "none", padding: 2.5 },
              ]}
            >
              <Image source={icons.profile} style={styles.profile} />
            </TouchableOpacity>
          </View>
        </View>

        <EventCarousel data={eventDataHome} />
        {/* Tabs */}
        <View style={styles.switchTabs}>
          {/* Parties And Classes */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.tab, activeTab === "parties" && styles.tabActive]}
            onPress={() => setActiveTab("parties")}
          >
            <Text style={styles.tabText}>Parties And Classes</Text>
          </TouchableOpacity>

          {/* Festivals */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.tab, activeTab === "festivals" && styles.tabActive]}
            onPress={() => setActiveTab("festivals")}
          >
            <Text style={styles.tabText}>Festivals</Text>
          </TouchableOpacity>
        </View>

        {/* Categories Grid */}

        <View
          style={{
            width: "100%",
            marginHorizontal: 15,
            flexWrap: "wrap",
            marginTop: RFPercentage(2),
            flexDirection: "row",
          }}
        >
          {categories.map((item) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              style={[
                styles.categoryCard,
                selectedId === item.id && { borderColor: Colors.purple },
              ]}
              onPress={() => handlePress(item)}
            >
              <Image source={item.image} style={styles.eventImage} />
              <Text style={styles.eventTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Screen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 20,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: fontSize(16),
    fontFamily: FontFamily.semiBold,
    color: "#fff",
    marginLeft: RFPercentage(1.5),
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    padding: 8,
    borderRadius: 30,
  },
  avatar: {
    width: 24,
    height: 24,
  },
  profile: {
    width: 38,
    height: 38,
  },
  categoryCard: {
    width: "45%",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: 12,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    padding: 3,
  },
  eventImage: {
    width: "100%",
    height: fontSize(100),
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: fontSize(12),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginVertical: 5,
  },

  dot: {
    width: RFPercentage(0.8),
    height: RFPercentage(0.8),
    borderRadius: RFPercentage(2),
    backgroundColor: Colors.primary,
    marginHorizontal: RFPercentage(0.2),
  },
  switchTabs: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: 25,
    padding: 4,
    marginTop: RFPercentage(2),
    marginHorizontal: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 20,
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: Colors.purple,
  },
  tabText: {
    color: Colors.pureWhite,
    fontFamily: FontFamily.medium,
    fontSize: fontSize(11),
  },

  categoryImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    padding: 10,
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: RFPercentage(1),
    gap: RFPercentage(0.3),
  },
  activeDot: {
    width: RFPercentage(2),
    backgroundColor: Colors.purple,
  },
});
