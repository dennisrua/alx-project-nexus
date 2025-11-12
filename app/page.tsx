'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchTrendingMovies } from '../utils/tmdb';
import Link from 'next/link';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
      setLoading(false);
    };
    getMovies();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Loading trending movies...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Trending Movies
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <MovieCard
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
