import styled from 'styled-components';

export const CastContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const CastDescr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CastName = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const CastChar = styled.p`
  font-size: 14px;
  margin: 0;
`;
