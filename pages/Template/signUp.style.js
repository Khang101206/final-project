import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #fafafa;
`;

// Left side of the form (sign-up inputs)
export const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.8rem;
    margin: 2rem 0;
  }

  input {
    display: block;
    width: 70%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;

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

// Right side of the form (social sign-in)
export const RightBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background-image: url( 'https://wallpaperaccess.com/full/4190081.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;

  span {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    
  }
`;

// Buttons for social sign-in (Facebook, Twitter, Google)
export const SocialButton = styled.button`
  width: 70%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.facebook {
    background-color: #3b5998;
  }

  &.twitter {
    background-color: #1da1f2;
  }

  &.google {
    background-color: #db4437;
  }

  &:hover {
    opacity: 0.8;
  }
`;

// OR text between form and social login
export const OrText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem;
  height: 50px;
  width: 50px;
  font-size: 1rem;
  color: #000;
  background-color: #999;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content:center;

`;
