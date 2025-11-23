'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useFavorites } from '@/hooks/useFavorites';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Card = styled.div`
  width: 200px;
  margin: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const FavButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'favorited',
})<{ favorited: boolean }>`
  background-color: ${({ favorited }) => (favorited ? '#ff4d4f' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster_path,
  release_date,
}) => {
  const router = useRouter();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const favorited = isFavorite(id);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // prevents the card click from firing
    if (favorited) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const goToMovie = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <Card onClick={goToMovie}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={500}
        height={750}
      />
      <Title>{title}</Title>
      <Date>{release_date}</Date>
      <FavButton favorited={favorited} onClick={toggleFavorite}>
        {favorited ? 'Unfavorite' : 'Favorite'}
      </FavButton>
    </Card>
  );
};

export default MovieCard;
