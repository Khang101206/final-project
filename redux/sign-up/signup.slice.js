import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for sign-up
export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3100/auth/signup', { // Update to signup endpoint
        username,
        email,
        password,
      });

      if (response.data.status === 'success') {
        return response.data.data.user; // Return the user object on success
      } else {
        return rejectWithValue(response.data.message); // Reject with error response
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Redux slice for handling the signup state
const signupSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    currentUser: null, // Store the signed-up user here on success
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
      localStorage.removeItem('currentUser');
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload; // Store the user on success
        localStorage.setItem('currentUser', JSON.stringify(action.payload)); // Persist user
        console.log("User registered successfully:", action.payload); // Log the registered user info
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Sign up failed';
        
      });
  },
});

export const { logout, resetError } = signupSlice.actions;
export default signupSlice.reducer;
