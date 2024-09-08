import { create } from 'zustand';

type Store = {
  sidebarActive: boolean;
  setSidebarActive: () => void;
};

const useSidebarStore = create<Store>((set) => ({
  sidebarActive: false,
  setSidebarActive: () => set((state) => ({ sidebarActive: !state.sidebarActive })),
}));

export default useSidebarStore;
