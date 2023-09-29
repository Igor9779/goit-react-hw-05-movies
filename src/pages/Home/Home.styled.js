import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

export const HomeTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const MovieTitle = styled.div`
  margin-top: 10px;

  h3 {
    font-size: 16px;
    margin: 0;
  }
`;
