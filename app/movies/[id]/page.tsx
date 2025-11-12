// app/movies/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchMovieDetails } from '@/utils/tmdb';
import Image from 'next/image';
import styled from 'styled-components';

interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  genres: { id: number; name: string }[];
}

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(Number(id));
      setMovie(data);
      setLoading(false);
    };
    getMovieDetails();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <Container>
      <BackButton onClick={() => router.back()}>← Back</BackButton>
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Genres: {movie.genres.map((g) => g.name).join(', ')}</p>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
      />
      <p style={{ marginTop: '1rem' }}>{movie.overview}</p>
    </Container>
  );
};

export default MovieDetailsPage;
