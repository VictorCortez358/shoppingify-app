import { create } from 'zustand'

export const useSidebarState = create((set) => ({
    open: false,
    toggle: () => set((state) => ({ open: !state.open })),
    close: () => set({ open: false }),
    openSidebar: () => set({ open: true }),
    closeSidebar: () => set({ open: false }),
}))