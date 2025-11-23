'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import { fetchTrendingMovies } from '../utils/tmdb';
import { useFavorites } from '@/hooks/useFavorites';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (err) {
        console.error('Failed to fetch trending movies', err);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading)
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#121212',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        paddingTop: '100px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>
          Welcome To AstraWatch
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: theme === 'light' ? '#555' : '#ccc',
          }}
        >
          Discover the best movies and TV shows
        </p>
      </div>

      {/* Movie Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          padding: '0 1rem',
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => {}}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
            <button
              style={{
                marginTop: '0.5rem',
                width: '100%',
                padding: '0.25rem 0',
                backgroundColor: isFavorite(movie.id) ? '#ff4444' : '#888',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={(e) => handleToggleFavorite(movie.id, e)}
            >
              {isFavorite(movie.id)
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
