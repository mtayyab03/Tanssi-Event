import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    id: "1",
    title: "Bachata",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: "2",
    title: "Kizomba",
    image: "https://picsum.photos/200/300?random=2",
  },
  { id: "3", title: "Salsa", image: "https://picsum.photos/200/300?random=3" },
  {
    id: "4",
    title: "Brazilian Zouk",
    image: "https://picsum.photos/200/300?random=4",
  },
];

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Top Events</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Event Card */}
      <View style={styles.eventCard}>
        <Image
          source={{ uri: "https://picsum.photos/500/250" }}
          style={styles.eventImage}
        />
        <Text style={styles.eventTitle}>Be You Kiz Fest</Text>
        <View style={styles.eventInfo}>
          <Ionicons name="location" size={14} color="#fff" />
          <Text style={styles.eventText}> Ottawa, Canada</Text>
        </View>
        <View style={styles.eventInfo}>
          <Ionicons name="calendar" size={14} color="#fff" />
          <Text style={styles.eventText}> May 24-27, 2024</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.switchTabs}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabActiveText}>Parties And Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Festivals</Text>
        </TouchableOpacity>
      </View>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081A3C",
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginLeft: 5,
  },
  eventCard: {
    backgroundColor: "#132B55",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  eventImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  eventText: {
    color: "#fff",
    fontSize: 14,
  },
  switchTabs: {
    flexDirection: "row",
    backgroundColor: "#0D2248",
    borderRadius: 25,
    padding: 4,
    marginTop: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: "#9B5BFF",
  },
  tabText: {
    color: "#fff",
  },
  tabActiveText: {
    color: "#fff",
    fontWeight: "600",
  },
  categoryCard: {
    backgroundColor: "#132B55",
    borderRadius: 12,
    marginBottom: 15,
    flex: 0.48,
    overflow: "hidden",
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
});
