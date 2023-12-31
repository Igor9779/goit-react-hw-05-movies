import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  border: none;
  background-color: red;
  margin: 20px 0 0 35px;
  padding: 10px 20px; 
  font-weight: 700;
  cursor: pointer;
  color: #000; 
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f44336; 
  }
`;


export const MovieContainer = styled.div`
  display: flex;
  padding: 30px;
  background-color: red;
    border-radius: 6px;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Img = styled.img`
  width: 300px;
`;

export const MovieInfo = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MovieTitle = styled.h2`
  margin-left: 0;
`;

export const AddInfo = styled.h3`
  margin-left: 35px;
  margin-bottom: 0;
`;

export const InfoList = styled.ul`
  text-decoration: none;
  margin-left: 0;
  margin-top: 0;
`;

export const InfoLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-decoration: none;
  font-weight: 600;
  &.active {
    color: #3f51b5;
    font-weight: 700;
    transform: scale(1.1);
`;
