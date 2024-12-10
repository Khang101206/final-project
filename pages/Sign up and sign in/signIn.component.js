import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/sign-in/signin.slice';
import { useNavigate } from 'react-router-dom';
import { SignInFormContainer, SignInBox, SignUpRedirect } from "../Sign up and sign in/signIn.style"; ;

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.signin);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Login failed:', err);
      });
  };

  return (
    <SignInFormContainer>
      <SignInBox>
        <h1>Sign In</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form 
          onSubmit={handleSubmit} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p>
          Not a member?{' '}
          <SignUpRedirect onClick={() => navigate('/Hotels/SignUp')}>Sign Up</SignUpRedirect>
        </p>
      </SignInBox>
    </SignInFormContainer>
  );
};

export default SignIn;
