import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "@/data/dummy-data";
import Meal from "@/models/meal";
import { useLocalSearchParams } from "expo-router";

export default function MealDetails() {
  const { meal: id } = useLocalSearchParams();
  const meal: Meal | undefined = MEALS.find((meal) => meal.id === id);
  if (!meal) {
    return (
      <View>
        <Text style={styles.text}>Meal not found...</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.text}>{meal.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
