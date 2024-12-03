import { create } from 'zustand';

// Cargar desde el localStorage al iniciar la tienda
const loadFavoritesFromLocalStorage = () => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const useStore = create((set) => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    addToFavorites: (movie) => {
        set((state) => {
            const newFavorites = [...state.favorites, movie];
            localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Guardamos en el localStorage
            return { favorites: newFavorites };
        });
    },
    removeFromFavorites: (movieId) => {
        set((state) => {
            const newFavorites = state.favorites.filter((movie) => movie.id !== movieId);
            localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Actualizamos en el localStorage
            return { favorites: newFavorites };
        });
    },
}));

export default useStore;
