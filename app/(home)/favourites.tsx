import AppView from "@/components/AppView";
import { MEALS } from "@/data/dummy-data";
import { useFavourites } from "@/store/favourites";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MealItem } from "../meals";

export default function Favourites() {
  const { favourites } = useFavourites();
  const favouriteMeals = MEALS.filter((meal) => favourites.includes(meal.id));
  return (
    <AppView>
      <View>
        <FlatList
          data={favouriteMeals}
          renderItem={({ item }) => <MealItem meal={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </AppView>
  );
}
