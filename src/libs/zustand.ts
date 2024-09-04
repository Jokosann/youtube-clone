import { create } from 'zustand';

type Store = {
  sidebarActive: boolean;
  webcam: boolean;
  setSidebarActive: () => void;
  setWebcam: () => void;
};

export const useStore = create<Store>((set) => ({
  sidebarActive: false,
  webcam: false,
  setSidebarActive: () => set((state) => ({ sidebarActive: !state.sidebarActive })),
  setWebcam: () => set((state) => ({ webcam: !state.webcam })),
}));
