import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api';
import { BackButton, Genres, MovieDetailsContainer, MovieInfo, MoviePoster, MovieTitle, Overview, ReleaseYear, UserScore } from './MovieDetails.styled.js';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/movies'

  const { poster, title, releaseYear, userScore, overview, genres } = movie ?? {};

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const backToMovies = () => {
    navigate(backLink);
  };

  return (
    <MovieDetailsContainer>
      <MoviePoster src={poster} alt={title} />
      <MovieTitle>{title}</MovieTitle>
      <MovieInfo>
        <ReleaseYear>Release Year: {releaseYear}</ReleaseYear>
        <UserScore>User Score: {userScore}</UserScore>
      </MovieInfo>
      <Overview>{overview}</Overview>
      <Genres>Genres: {genres}</Genres>
      <BackButton onClick={backToMovies}>Back to Movies</BackButton>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
