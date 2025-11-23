'use client';

import { useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const saveToLocalStorage = (items: number[]) => {
    localStorage.setItem('favorites', JSON.stringify(items));
  };

  const addFavorite = (id: number) => {
    const updated = [...favorites, id];
    setFavorites(updated);
    saveToLocalStorage(updated);
  };

  const removeFavorite = (id: number) => {
    const updated = favorites.filter((fav) => fav !== id);
    setFavorites(updated);
    saveToLocalStorage(updated);
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
