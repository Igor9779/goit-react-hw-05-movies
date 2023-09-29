import { fetchTrending } from 'api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeContainer, HomeTitle, Img, MovieItem, MovieLink, MovieList, MovieTitle } from './Home.styled.js';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    useEffect(() => {
        fetchTrending().then(setMovies);
    }, []);

return (
    <div>
        <HomeContainer>
            <HomeTitle>Tranding today</HomeTitle>
            {movies.length > 0 && (
                <MovieList>
                    {movies.map(({ id, title, poster }) => (
                    <MovieItem key={id}>
                        <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                            <Img src={poster} alt={title} />
                            <MovieTitle>
                                <h3>{title}</h3>
                            </MovieTitle>
                        </MovieLink>
                    </MovieItem>
                    ))}
                </MovieList>
            )}
        </HomeContainer>
    </div>
    )
}

export default Home;