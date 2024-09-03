import { create } from 'zustand';

type Store = {
  sidebarActive: boolean;
  setSidebarActive: () => void;
};

export const useStore = create<Store>((set) => ({
  sidebarActive: false,
  setSidebarActive: () => set((state) => ({ sidebarActive: !state.sidebarActive })),
}));
