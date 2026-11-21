import { create } from 'zustand';

export const useProductFilterStore = create((set) => ({
  searchQuery: 'linen shirt',
  totalItems: 18,
  selectedCategories: ['Linen Tops'],
  priceRange: [20, 150],
  selectedSizes: ['L'],
  selectedColors: ['Olive', 'Natural'],
  sortBy: 'featured',
  viewMode: 'grid', // 'grid' or 'list'

  // Actions
  toggleCategory: (category) => set((state) => {
    const exists = state.selectedCategories.includes(category);
    return {
      selectedCategories: exists
        ? state.selectedCategories.filter(c => c !== category)
        : [...state.selectedCategories, category]
    };
  }),

  setPriceRange: (range) => set({ priceRange: range }),

  toggleSize: (size) => set((state) => {
    const exists = state.selectedSizes.includes(size);
    return {
      selectedSizes: exists
        ? state.selectedSizes.filter(s => s !== size)
        : [...state.selectedSizes, size]
    };
  }),

  toggleColor: (color) => set((state) => {
    const exists = state.selectedColors.includes(color);
    return {
      selectedColors: exists
        ? state.selectedColors.filter(c => c !== color)
        : [...state.selectedColors, color]
    };
  }),

  setSortBy: (sort) => set({ sortBy: sort }),
  setViewMode: (mode) => set({ viewMode: mode }),

  clearAllFilters: () => set({
    selectedCategories: [],
    priceRange: [0, 500],
    selectedSizes: [],
    selectedColors: [],
  }),

  removeFilter: (type, value) => set((state) => {
    if (type === 'category') return { selectedCategories: state.selectedCategories.filter(c => c !== value) };
    if (type === 'size') return { selectedSizes: state.selectedSizes.filter(s => s !== value) };
    if (type === 'color') return { selectedColors: state.selectedColors.filter(col => col !== value) };
    return {};
  })
}));