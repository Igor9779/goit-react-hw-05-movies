// Movies.styled.js
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormDiv = styled.div`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  display: flex;
  align-items: center;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

export const Img = styled.img`
  max-width: 100px;
`;

export const MovieTitle = styled.div`
  margin-top: 10px;

  h3 {
    font-size: 16px;
    margin: 0;
  }
`;
