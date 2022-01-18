import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  `;

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--blue-light);
    height: 3rem;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;
    
    color: #fff;
    font-size: 1rem;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;