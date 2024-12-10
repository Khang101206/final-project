import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: true,
  detail : null,
  error: null,
};

export const fetchHotelById = createAsyncThunk(
  'hotels/fetchHotelById',
  async (hotelId) => {
    const response = await fetch(`http://localhost:3100/Hotels/detail/${hotelId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch hotel details');
    }
    const data = await response.json();
    return data; // Trả về chi tiết khách sạn
  }
);


export const fetchHotels = createAsyncThunk(
  'hotels/fetchHotels', 
  async () => {
    const response = await fetch('http://localhost:3100/hotels');
    if (!response.ok) {
      throw new Error('Failed to fetch hotels');
    }
    const data = await response.json();
    return data;
  }
);

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Xử lý danh sách khách sạn
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data.hotels; // Cập nhật danh sách khách sạn
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Xử lý chi tiết khách sạn theo ID
      .addCase(fetchHotelById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelById.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload; // Cập nhật chi tiết khách sạn
      })
      .addCase(fetchHotelById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default hotelsSlice.reducer;
