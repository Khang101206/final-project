import styled from 'styled-components';

// Shared form container for consistent background and layout
export const SignInFormContainer = styled.div`
  height: 695px;
  display: flex;
  width: 100%;
  background-image: url('https://wallpaperaccess.com/full/2538198.jpg');
  background-size: cover;
`;

// Form box styling for SignIn form
export const SignInBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  opacity: 0.85;

  h1 {
    font-size: 1.8rem;
    margin: 2rem 0;
  }

  input {
    display: block;
    width: 300px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    height: 50px;

    &:focus {
      border-color: #111;
    }
  }

  button {
    width: 40%;
    padding: 0.75rem;
    background-color: #111;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    
    &:hover {
      background-color: #333;
    }
  }
`;

export const SignUpRedirect = styled.a`
  cursor: pointer;
  color: #59adff;
  text-decoration: underline;
`;

