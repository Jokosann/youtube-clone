import { create } from 'zustand';

type Store = {
  sidebarAbsoluteActive: boolean;
  setTrueSidebarAbsoluteActive: () => void;
  setFalseSidebarAbsoluteActive: () => void;
};

export const useStore = create<Store>((set) => ({
  sidebarAbsoluteActive: false,
  setTrueSidebarAbsoluteActive: () => set({ sidebarAbsoluteActive: true }),
  setFalseSidebarAbsoluteActive: () => set({ sidebarAbsoluteActive: false }),
}));
