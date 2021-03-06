import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background: #e7e9ee;
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    background: var(--green);
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    
    transition: filter 0.2s;

    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
  `;

  export const TransactionTypeContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  `;

  interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
  }

  const colors = {
    red: '#E62E4D',
    green: '#33CC95'
  }

  export const RadioBox = styled.button<RadioBoxProps>`
    background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) 
    : 'transparent'};

    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')}
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  `;
