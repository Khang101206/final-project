import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../redux/sign-up/signup.slice"; 
import { FormContainer, FullBox, SignInButton } from "../Sign up and sign in/signUp.style"; 
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading: usersLoading, users: list, error: usersError } = useSelector(state => state.users); 
  console.log(list);
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  console.log('formData', formData);
  

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessages = {};

    if (!formData.username) errorMessages.username = "Please enter a username!";
    if (!formData.email) errorMessages.email = "Please enter an email!";
    if (!formData.password) errorMessages.password = "Please enter a password!";
    if (!formData.password2) errorMessages.password2 = "Please re-enter your password!";
    if (formData.password && formData.password2 && formData.password !== formData.password2) {
      errorMessages.password2 = "Passwords do not match!";
    }

    setErrors(errorMessages);


    if (Object.keys(errorMessages).length === 0) {
      dispatch(signupUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }))
      .unwrap()
      .then(() => {
        setSuccessMessage("User signed up successfully!");
        setFormData({ username: "", email: "", password: "", password2: "" });
        navigate('/Hotels/SignIn');
      })
      .catch((error) => {
        if (error.message === 'Username already exists.') {
          setErrors({ username: 'This username is already taken. Please choose a different one.' });
        } else {
          setErrors({ general: error || "Sign up failed. Try again." });
        }
      });      
    }
  };

  return (
    <FormContainer>
      <FullBox>
        <h1>Sign up</h1>

        {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {usersError && <p style={{ color: "red" }}>{usersError}</p>}
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {errors.password2 && <p style={{ color: "red" }}>{errors.password2}</p>}
        <input
          type="password"
          name="password2"
          placeholder="Retype password"
          value={formData.password2}
          onChange={handleChange}
        />

        <input 
          type="submit" 
          name="signup_submit" 
          value={usersLoading ? "Signing up..." : "Sign up"} 
          onClick={handleSubmit} 
          disabled={usersLoading} 
        />
        
        <div>
          I'm already a member!{" "}
          <SignInButton>
            <NavLink to={`/Hotels/SignIn`}>Sign in</NavLink>
          </SignInButton>
        </div>
      </FullBox>
    </FormContainer>
  );
};

export default SignUp;
