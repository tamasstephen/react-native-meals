import { CATEGORIES, MEALS } from "@/data/dummy-data";
import {
  Image,
  Pressable,
  FlatList,
  View,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import Title from "@/components/Title";
import { Href, router, useLocalSearchParams, useNavigation } from "expo-router";
import Meal from "@/models/meal";
import { useLayoutEffect } from "react";

const MealItem = ({ meal }: { meal: Meal }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Back" onPress={() => router.dismissTo("../")} />
      ),
    });
  }, [navigation]);

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
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.itemText}>{meal.title}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>{meal.duration} min</Text>
          <Text style={styles.tag}>{meal.complexity}</Text>
          <Text style={styles.tag}>{meal.affordability}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default function Overview() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const navigation = useNavigation();
  const availableMeals = categoryId
    ? MEALS.filter((meal) => meal.categoryIds.includes(categoryId.toString()))
    : [];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryId
        ? CATEGORIES.find((c) => c.id === categoryId)?.title
        : "All",
    });
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <Title>Meals</Title>
      <FlatList
        data={availableMeals}
        renderItem={({ item }) => <MealItem meal={item} />}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemList: {
    width: "80%",
    maxHeight: "100%",
    marginTop: 32,
  },
  itemText: {
    color: "white",
    textAlign: "center",
    paddingTop: 16,
    fontWeight: "bold",
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 16,
    paddingTop: 8,
  },
  tag: {
    color: "white",
    textAlign: "center",
    padding: 8,
    fontSize: 12,
    borderColor: "#d4d4d4",
    borderRadius: 4,
    margin: 4,
    backgroundColor: "#323232",
    borderWidth: 1,
  },
  itemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#292929",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    objectFit: "cover",
    aspectRatio: 1,
  },
});
