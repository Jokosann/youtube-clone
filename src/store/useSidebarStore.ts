import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

type Store = {
  sidebarActive: boolean;
  setSidebarActive: () => void;
};

const useSidebarStore = create<Store>((set) => ({
  sidebarActive: false,
  setSidebarActive: () => set((state) => ({ sidebarActive: !state.sidebarActive })),
}));

const useSidebar = () => {
  const state = useSidebarStore(
    useShallow((prev) => ({
      sidebarActive: prev.sidebarActive,
      setSidebarActive: prev.setSidebarActive,
    }))
  );

  return state;
};

export default useSidebar;
