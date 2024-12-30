import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import AppView from "../AppView";
import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../Title";
import { Href, router } from "expo-router";

const CategoryItem = ({ item }: { item: Category }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" + 0.5 }}
      style={({ pressed }) => [
        {
          backgroundColor: item.color,
        },
        styles.cardStyle,
        pressed && styles.buttonPressed,
      ]}
      onPress={() => router.push(`/meals?categoryId=${item.id}` as Href)}
    >
      <View style={styles.cardInner}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

export default function CategoryScreen() {
  return (
    <AppView>
      <SafeAreaView
        style={{ width: "100%", height: "100%", flex: 1, overflow: "visible" }}
      >
        <View style={styles.wrapper}>
          <Title>Categories</Title>
          <View style={styles.listContainer}>
            <FlatList
              data={CATEGORIES}
              renderItem={({ item }) => <CategoryItem item={item} />}
              style={{ width: "100%", gap: 8 }}
              numColumns={2}
              keyExtractor={(item) => item.id}
              columnWrapperStyle={{ justifyContent: "space-between" }}
            />
          </View>
        </View>
      </SafeAreaView>
    </AppView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  listContainer: {
    marginTop: 24,
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
  },
  cardStyle: {
    flex: 1,
    height: "auto",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    aspectRatio: 1,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    margin: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  cardInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.2,
  },
});
