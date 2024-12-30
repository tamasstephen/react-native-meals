import { View, Text, FlatList, StyleSheet } from "react-native";
import AppView from "../AppView";
import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../Title";

const CategoryItem = ({ item }: { item: Category }) => {
  return (
    <View
      style={[
        {
          backgroundColor: item.color,
        },
        styles.cardStyle,
      ]}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );
};

export default function CategoryScreen() {
  return (
    <AppView>
      <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
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
              ItemSeparatorComponent={() => (
                <View style={{ height: 8, width: 8 }} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </AppView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 48,
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
    width: "49%",
    height: "auto",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    aspectRatio: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
