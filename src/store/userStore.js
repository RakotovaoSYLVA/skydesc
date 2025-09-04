import { create } from "zustand";

export const useUserStore = create((set) => ({
  name: "",
  email: "",
  password: "",
  setField: (field, value) =>
    set((state) => {
      // Évite les mises à jour si la valeur est identique
      if (state[field] === value) return state;
      return {
        ...state,
        [field]: value,
      };
    }),
  resetUser: () => set({ name: "", email: "", password: "" }),
}));