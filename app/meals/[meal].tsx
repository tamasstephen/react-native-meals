import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "@/data/dummy-data";
import Meal from "@/models/meal";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Title from "@/components/Title";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "@/components/ui/IconButton";

export default function MealDetails() {
  const { meal: id } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const meal: Meal | undefined = MEALS.find((meal) => meal.id === id);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => {
        return (
          <IconButton onClick={toggleFavorite}>
            <Ionicons
              color={isFavorite ? "yellow" : "white"}
              name="star"
              size={24}
            />
          </IconButton>
        );
      },
    });
  }, [meal, toggleFavorite]);

  if (!meal) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Meal not found...</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <Title>{meal.title}</Title>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.tagWrapper}>
              <Text style={styles.tag}>{meal.duration} min</Text>
              <Text style={styles.tag}>{meal.complexity}</Text>
              <Text style={styles.tag}>{meal.affordability}</Text>
            </View>

            <View style={styles.ingredientBox}>
              {meal.ingredients.map((ingredient, index) => (
                <View key={index}>
                  <Text style={styles.ingredientText}>{ingredient}</Text>
                </View>
              ))}
            </View>

            <View style={styles.recipeBox}>
              <Text style={styles.recipe}>{meal.steps}</Text>
            </View>
          </View>
          <View style={styles.tagWrapper}>
            {meal.isGlutenFree && <Text style={styles.tag}>Gluten Free</Text>}
            {meal.isVegan && <Text style={styles.tag}>Vegan</Text>}
            {meal.isVegetarian && <Text style={styles.tag}>Vegetarian</Text>}
            {meal.isLactoseFree && <Text style={styles.tag}>Lactose Free</Text>}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
  },
  wrapper: {
    flex: 1,
    marginVertical: 24,
    marginHorizontal: 24,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 24,
  },
  tagWrapper: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
  },
  tag: {
    color: "white",
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#292929",
    boxShadow: "0 2px 15px 2px rgba(0, 0, 0, 0.3)",
  },
  ingredientBox: {
    backgroundColor: "#292929",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "white",
    gap: 8,
    width: "100%",
  },
  ingredientText: {
    color: "white",
  },
  recipeBox: {
    paddingVertical: 16,
    marginBottom: 8,
    marginVertical: 32,
    width: "100%",
  },
  recipeText: {
    color: "white",
    fontSize: 20,
  },
  recipe: {
    fontSize: 18,
    color: "white",
    marginBottom: 32,
  },
});
