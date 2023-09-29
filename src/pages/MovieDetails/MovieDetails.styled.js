// MovieDetails.styled.js
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ReleaseYear = styled.span`
  font-size: 16px;
  color: #555;
`;

export const UserScore = styled.span`
  font-size: 16px;
  color: #555;
`;

export const Overview = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
`;

export const Genres = styled.div`
  font-size: 16px;
  color: #555;
`;

export const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
`;

