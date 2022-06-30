import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLng: (state, action) => {
      state.lng = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = !state.isLoading;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default weatherSlice.reducer;
export const {setLat, setLng, setData, setIsLoading, setError} =
  weatherSlice.actions;
