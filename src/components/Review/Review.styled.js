import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;

      h3 {
        font-size: 18px;
        margin-bottom: 5px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }
`;
