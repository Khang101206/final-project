import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 695px;
  display: flex;
  width: 100%;
  background-image: url( 'https://wallpaperaccess.com/full/2538198.jpg');
`;

// Left side of the form (sign-up inputs)
export const FullBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  opacity: 0.7;

  h1 {
    font-size: 1.8rem;
    margin: 2rem 0;
  }

  input {
    display: block;
    width: 40%;
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

  input[type="submit"] {
    background-color: #111;
    color: #fff;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: #333;
    }
  }
`;

export const SignInButton = styled.a`
  cursor: pointer;
  color: #59adff;
`




