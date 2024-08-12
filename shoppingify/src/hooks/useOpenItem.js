import { create } from 'zustand'

export const useOpenItem = create((set) => ({
    open: false,
    toggle: () => set((state) => ({ open: !state.open })),
}))