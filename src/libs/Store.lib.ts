import type { UseAppType, UseThemeType } from '@/types/store.type';
import { create } from 'zustand';

const useApp = create<UseAppType>((set) => ({
  language: 'en',
  setLanguage: (language) => set(() => ({ language })),

  title: 'Bolt Task',
  setTitle: (title) => set(() => ({ title })),

  pageTitle: '',
  setPageTitle: (pageTitle) => set(() => ({ pageTitle })),

  dir: 'rtl',
  setDir: (dir) => set(() => ({ dir })),

  isUnderMaintenance: false,
  setIsUnderMaintenance: (isUnderMaintenance) =>
    set(() => ({ isUnderMaintenance })),
}));

const useTheme = create<UseThemeType>((set) => ({
  theme: '',
  setTheme: (theme) => set(() => ({ theme })),

  isHeaderVisible: false,
  setIsHeaderVisible: (b) => set(() => ({ isHeaderVisible: b })),

  isNavbarActive: false,
  setIsNavbarActive: (b) => set(() => ({ isNavbarActive: b })),

  isMotionSafe: false,
  setIsMotionSafe: () =>
    set(() => ({
      isMotionSafe: !window.matchMedia('(prefers-reduced-motion: reduce)')
        .matches,
    })),
}));

const Store = {
  useApp,
  useTheme,
};

export default Store;
