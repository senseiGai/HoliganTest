import { create } from 'zustand'

interface CategoryState {
    activeCategory: string | null
    setActiveCategory: (category: string) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
    activeCategory: 'Обед',
    setActiveCategory: (category) => set({ activeCategory: category }),
}))
