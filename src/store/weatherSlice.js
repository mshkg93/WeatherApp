import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  cityData: [],
  weekly: false,
  units: 'metric',
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
    setCityData: (state, action) => {
      state.cityData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = !state.isLoading;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUnits: (state, action) => {
      state.units === 'metric'
        ? (state.units = 'imperial')
        : (state.units = 'metric');
    },
    setWeekly: (state) => {
      state.weekly === false
        ? (state.weekly = true)
        : (state.weekly = false);
    },
  },
});

export default weatherSlice.reducer;
export const {
  setLat,
  setLng,
  setData,
  setCityData,
  setIsLoading,
  setError,
  setUnits,
  setWeekly,
} = weatherSlice.actions;
