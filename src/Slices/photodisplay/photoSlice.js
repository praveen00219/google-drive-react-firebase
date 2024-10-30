import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: null,
  title: null,
  bin: [], // Add bin array to track deleted images
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotoDisplay: (state, action) => {
      state.title = action.payload.title;
      state.photo = action.payload.photo;
    },
    moveToBin: (state, action) => {
      console.log("moveToBin Photo: ", action.payload);
      console.log("moveToBin Array: ", state.bin);
      // Add image to bin array and reset photo and title display
      state.bin.push(action.payload);
      if (state.photo === action.payload.photo) {
        state.photo = null;
        state.title = null;
      }
    },
  },
});

export const { setPhotoDisplay, moveToBin } = photoSlice.actions;

export const selectPhotoDisplay = (state) => state.photos.photo;
export const selectTitleDisplay = (state) => state.photos.title;
export const selectBinItems = (state) => state.photos.bin; // Selector for bin items

export default photoSlice.reducer;
