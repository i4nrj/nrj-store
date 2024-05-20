import {create} from "zustand";

export const useNrjStore = create((set) => ({
  favorites: [],
  setFavorites: (i) => set(() => ({ favorites: i })),
  purchases: [],
  setPurchases: (i) => set(() => ({ purchases: i })),
}));