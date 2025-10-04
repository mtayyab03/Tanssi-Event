import React, { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

// Components
import Screen from "@/components/common/Screen";
import EventCarousel from "@/components/Specific/EventCarousel";
import EventCard from "@/components/Specific/EventCard";
import FilterModal from "@/components/Specific/FilterModal";

// constants
import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/font";
import icons from "@/constants/icons";
import { fontSize } from "@/constants/fontUtils";
import { eventData, categoryData } from "@/constants/dummyData";

const participants = [
  { id: "1", image: icons.pf3 },
  { id: "2", image: icons.pf2 },
  { id: "3", image: icons.pf1 },
];
export default function EventsScreen() {
  const { category, events } = useLocalSearchParams();
  const parsedEvents = events ? JSON.parse(events as string) : [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log("paresed events", parsedEvents);
  const [isVisible, setIsVisible] = useState(false);

  // Generate dates for next 10 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);

      const day = d.toLocaleDateString("en-US", { day: "2-digit" });
      const month = d.toLocaleDateString("en-US", { month: "short" });

      dates.push({
        id: i.toString(),
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : `${day} ${month}`,
      });
    }
    return dates;
  };

  const dates = generateDates();
  const router = useRouter();

  return (
    <LinearGradient
      colors={[Colors.bgBlue, Colors.bgBlack]}
      style={styles.gradient}
    >
      <Screen style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.headerTitle}>Top {category} Events</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={icons.search} style={styles.avatar} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsVisible(true)}
              style={styles.iconButton}
            >
              <Image source={icons.filter} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>

        <EventCarousel data={parsedEvents} />
        {/* Tabs */}
        <View style={styles.dateFilterWrapper}>
          <FlatList
            data={dates}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelectedIndex(index)}
                style={[
                  styles.tab,
                  selectedIndex === index && styles.tabActive,
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedIndex === index && { color: Colors.white },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{
              paddingHorizontal: RFPercentage(1.5),
              marginBottom: RFPercentage(1),
            }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: RFPercentage(5),
            paddingHorizontal: RFPercentage(1),
          }}
        >
          {categoryData.map((item) => (
            <EventCard
              key={item.id}
              id={item.id}
              title={item.title}
              location={item.location}
              date={item.date}
              image={item.image}
              participants={participants}
              extraCount={45}
              onPress={() => console.log("Clicked:", item.title)}
            />
          ))}
        </ScrollView>

        <FilterModal visible={isVisible} onClose={() => setIsVisible(false)} />
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
    height: RFPercentage(21.5),
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: fontSize(14),
    fontFamily: FontFamily.semiBold,
    color: Colors.pureWhite,
    marginTop: 5,
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  eventText: {
    fontFamily: FontFamily.regular,
    color: Colors.textColor,
    fontSize: fontSize(12),
    marginLeft: RFPercentage(0.5),
  },
  eventCard: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    borderRadius: 12,
    padding: 10,
    marginTop: RFPercentage(2),
    marginHorizontal: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RFPercentage(0.8),
  },
  dot: {
    width: RFPercentage(0.8),
    height: RFPercentage(0.8),
    borderRadius: RFPercentage(2),
    backgroundColor: Colors.primary,
    marginHorizontal: RFPercentage(0.2),
  },
  dateFiletrContainer: {
    flexDirection: "row",
    marginTop: RFPercentage(2),
  },
  dateFilterWrapper: {
    marginTop: RFPercentage(3),
  },
  tab: {
    backgroundColor: Colors.primary,
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    paddingVertical: 13,
    paddingHorizontal: RFPercentage(2.5),
    borderRadius: RFPercentage(3),
    alignItems: "center",
    marginRight: RFPercentage(1.5),
  },
  tabActive: {
    backgroundColor: Colors.purple,
    borderColor: Colors.purple,
  },
  tabText: {
    color: Colors.textColor,
    fontSize: RFPercentage(1.8),
    fontWeight: "500",
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
