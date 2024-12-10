import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: true,
  error: null,
};

export const fetchLocations = createAsyncThunk(
  'locations/fetchLocations', 
  async () => {
    const response = await fetch('http://localhost:3100/locations');
    if (!response.ok) {
      throw new Error('Failed to fetch locations');
    }
    const data = await response.json();
    return data.data; // Return the actual location data
  }
);

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // Update the state with location data
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default locationsSlice.reducer;
