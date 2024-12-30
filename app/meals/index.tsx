import { MEALS } from "@/data/dummy-data";
import { Pressable, FlatList, View, StyleSheet, Text } from "react-native";
import Title from "@/components/Title";
import { Href, router, useLocalSearchParams } from "expo-router";
import Meal from "@/models/meal";

const MealItem = ({ meal }: { meal: Meal }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" + 0.5 }}
      style={({ pressed }) => [
        {
          backgroundColor: "#292929",
        },
        styles.itemContainer,
        pressed && styles.buttonPressed,
      ]}
      onPress={() => router.push(`/meals/${meal.id}` as Href)}
    >
      <View>
        <Text style={styles.itemText}>{meal.title}</Text>
      </View>
    </Pressable>
  );
};

export default function Overview() {
  const { categoryId } = useLocalSearchParams();
  const availableMeals = categoryId
    ? MEALS.filter((meal) => meal.categoryIds.includes(categoryId.toString()))
    : [];

  return (
    <View style={styles.container}>
      <Title>Meals</Title>
      <FlatList
        data={availableMeals}
        renderItem={({ item }) => <MealItem meal={item} />}
        keyExtractor={(item) => item.id}
        style={{ width: "100%", maxHeight: "50%", marginTop: 32 }}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    alignItems: "center",
  },
  itemText: {
    color: "white",
    textAlign: "center",
  },
  itemContainer: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#292929",
    borderColor: "white",
    borderWidth: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
