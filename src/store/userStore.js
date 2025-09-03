import { create } from 'zustand';

export const userStore = create((set) => ({
  name: '',
  email: '',
  password: '',
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));
