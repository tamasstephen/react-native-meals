import { create } from "zustand";

interface FavouritesStore {
  favourites: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

export const useFavourites = create<FavouritesStore>((set) => ({
  favourites: [],
  addFavourite: (id: string) =>
    set((state) => ({ favourites: [...state.favourites, id] })),
  removeFavourite: (id: string) =>
    set((state) => ({
      favourites: state.favourites.filter((favourite) => favourite !== id),
    })),
}));
