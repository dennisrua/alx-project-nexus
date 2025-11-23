'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard';
import { fetchMovieDetails } from '@/utils/tmdb';
import { useFavorites } from '@/hooks/useFavorites';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!favorites || favorites.length === 0) {
      setMovies([]);
      setLoading(false);
      return;
    }

    const loadMovies = async () => {
      try {
        const details = await Promise.all(
          favorites.map((id) => fetchMovieDetails(id))
        );

        const formatted: Movie[] = details.map((d) => ({
          id: d.id,
          title: d.title,
          poster_path: d.poster_path,
          release_date: d.release_date,
        }));

        setMovies(formatted);
      } catch (err) {
        console.error('Failed to load favorite movies', err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [favorites]);

  if (loading) {
    return (
      <p style={{ paddingTop: '100px', textAlign: 'center' }}>
        Loading favorites...
      </p>
    );
  }

  if (!movies.length) {
    return (
      <p style={{ paddingTop: '100px', textAlign: 'center' }}>
        No favorite movies saved yet.
      </p>
    );
  }

  return (
    <div style={{ padding: '100px 1rem 2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Your Favorite Movies
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
