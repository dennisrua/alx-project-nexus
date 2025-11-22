'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
      setLoading(false);
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
