// components/MovieCard.tsx
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface MovieCardProps {
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

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster_path,
  release_date,
}) => {
  return (
    <Card>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={500}
        height={750}
      />
      <Title>{title}</Title>
      <Date>{release_date}</Date>
    </Card>
  );
};

export default MovieCard;
