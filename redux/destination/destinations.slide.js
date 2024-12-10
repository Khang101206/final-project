import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 


const initialState = {
  list: [],
  loading: false,
}


export const fetchDestinations = createAsyncThunk(
  'products/fetchDestinations', 
  async () => {
    try {
      const response = await fetch(`http://localhost:3100/destinations`);
      if (!response.ok) {
        throw new Error('Failed to fetch destinations');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);


const destinationsSlice = createSlice({
  name: 'destinations',
  initialState ,
  reducers: {
    destinationLoaded(state,action){
      state.list= action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { destinaionsLoaded } = destinationsSlice.actions;
export default destinationsSlice.reducer;
